
const Photographer = require('../models/Photographer.model');
const PortfolioItem = require('../models/Portfolio.model');
const User = require('../models/User.model');
const { validationResult } = require('express-validator');

/**
 * @desc    Get all photographers
 * @route   GET /api/photographers
 * @access  Public
 */
exports.getPhotographers = async (req, res) => {
  try {
    const { 
      location, 
      languages,
      minPrice, 
      maxPrice, 
      specialties,
      rating, 
      page = 1, 
      limit = 10 
    } = req.query;

    // Build query
    const query = {};

    if (location) {
      query.$or = [
        { nativePlace: { $regex: location, $options: 'i' } },
        { 'availability.locations': { $regex: location, $options: 'i' } }
      ];
    }

    if (languages) {
      const languageArray = languages.split(',');
      query.languages = { $in: languageArray };
    }

    if (specialties) {
      const specialtiesArray = specialties.split(',');
      query.specialties = { $in: specialtiesArray };
    }

    if (minPrice || maxPrice) {
      query.pricing = {};
      if (minPrice) query.pricing.hourly = { $gte: Number(minPrice) };
      if (maxPrice) query.pricing.hourly = { $lte: Number(maxPrice) };
    }

    if (rating) {
      query.rating = { $gte: Number(rating) };
    }

    // Execute query with pagination
    const photographers = await Photographer.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ rating: -1, createdAt: -1 });

    // Get count for pagination
    const total = await Photographer.countDocuments(query);

    // Fetch user details for each photographer
    const photographersWithUserInfo = await Promise.all(
      photographers.map(async (photographer) => {
        const user = await User.findById(photographer.userId);
        return {
          ...photographer.toObject(),
          name: user.name,
          email: user.email,
          profilePicture: user.profilePicture
        };
      })
    );

    res.json({
      photographers: photographersWithUserInfo,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
        limit: Number(limit)
      }
    });
  } catch (error) {
    console.error('Get photographers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Get photographer by ID
 * @route   GET /api/photographers/:id
 * @access  Public
 */
exports.getPhotographerById = async (req, res) => {
  try {
    const photographer = await Photographer.findById(req.params.id);
    
    if (!photographer) {
      return res.status(404).json({ message: 'Photographer not found' });
    }

    // Get user details
    const user = await User.findById(photographer.userId);
    
    // Get portfolio items
    const portfolioItems = await PortfolioItem.find({ 
      photographerId: photographer._id 
    });

    res.json({
      photographer: {
        ...photographer.toObject(),
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture
      },
      portfolio: portfolioItems
    });
  } catch (error) {
    console.error('Get photographer error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Photographer not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Create photographer profile
 * @route   POST /api/photographers
 * @access  Private (user role)
 */
exports.createProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    bio,
    nativePlace,
    languages,
    pricing,
    availability,
    specialties,
    equipment,
    coverPhoto
  } = req.body;

  try {
    // Check if user already has a photographer profile
    const existingProfile = await Photographer.findOne({ userId: req.user.id });
    
    if (existingProfile) {
      return res.status(400).json({ message: 'You already have a photographer profile' });
    }

    // Update user role to photographer
    const user = await User.findById(req.user.id);
    user.role = 'photographer';
    await user.save();

    // Create photographer profile
    const photographer = await Photographer.create({
      userId: req.user.id,
      bio,
      nativePlace,
      languages,
      pricing,
      availability,
      specialties,
      equipment,
      coverPhoto
    });

    res.status(201).json({
      photographer: {
        ...photographer.toObject(),
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    console.error('Create profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Update photographer profile
 * @route   PUT /api/photographers
 * @access  Private (photographer role)
 */
exports.updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    bio,
    nativePlace,
    languages,
    pricing,
    availability,
    specialties,
    equipment,
    coverPhoto
  } = req.body;

  try {
    let photographer = await Photographer.findOne({ userId: req.user.id });
    
    if (!photographer) {
      return res.status(404).json({ message: 'Photographer profile not found' });
    }

    // Update fields
    if (bio) photographer.bio = bio;
    if (nativePlace) photographer.nativePlace = nativePlace;
    if (languages) photographer.languages = languages;
    if (pricing) photographer.pricing = pricing;
    if (availability) photographer.availability = availability;
    if (specialties) photographer.specialties = specialties;
    if (equipment) photographer.equipment = equipment;
    if (coverPhoto) photographer.coverPhoto = coverPhoto;

    await photographer.save();

    // Get user details
    const user = await User.findById(req.user.id);

    res.json({
      photographer: {
        ...photographer.toObject(),
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Add portfolio item
 * @route   POST /api/photographers/portfolio
 * @access  Private (photographer role)
 */
exports.addPortfolioItem = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    type,
    url,
    publicId,
    caption,
    tags,
    category,
    featured
  } = req.body;

  try {
    // Check if photographer profile exists
    const photographer = await Photographer.findOne({ userId: req.user.id });
    
    if (!photographer) {
      return res.status(404).json({ message: 'Photographer profile not found' });
    }

    // Create portfolio item
    const portfolioItem = await PortfolioItem.create({
      photographerId: photographer._id,
      type,
      url,
      publicId,
      caption,
      tags,
      category,
      featured
    });

    res.status(201).json({ portfolioItem });
  } catch (error) {
    console.error('Add portfolio item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Delete portfolio item
 * @route   DELETE /api/photographers/portfolio/:id
 * @access  Private (photographer role)
 */
exports.deletePortfolioItem = async (req, res) => {
  try {
    // Check if photographer profile exists
    const photographer = await Photographer.findOne({ userId: req.user.id });
    
    if (!photographer) {
      return res.status(404).json({ message: 'Photographer profile not found' });
    }

    // Find portfolio item
    const portfolioItem = await PortfolioItem.findById(req.params.id);
    
    if (!portfolioItem) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    // Check if portfolio item belongs to photographer
    if (portfolioItem.photographerId.toString() !== photographer._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Delete portfolio item
    await portfolioItem.remove();

    res.json({ message: 'Portfolio item removed' });
  } catch (error) {
    console.error('Delete portfolio item error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};
