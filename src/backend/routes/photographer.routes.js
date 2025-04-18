
const express = require('express');
const { check } = require('express-validator');
const photographerController = require('../controllers/photographer.controller');
const { authMiddleware, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

// @route   GET /api/photographers
// @desc    Get all photographers
// @access  Public
router.get('/', photographerController.getPhotographers);

// @route   GET /api/photographers/:id
// @desc    Get photographer by ID
// @access  Public
router.get('/:id', photographerController.getPhotographerById);

// @route   POST /api/photographers
// @desc    Create photographer profile
// @access  Private (user role)
router.post(
  '/',
  [
    authMiddleware,
    authorize(['user']),
    check('bio', 'Bio is required').not().isEmpty(),
    check('nativePlace', 'Native place is required').not().isEmpty(),
    check('languages', 'At least one language is required').isArray({ min: 1 }),
    check('pricing.hourly', 'Hourly rate is required').isNumeric(),
    check('pricing.fullDay', 'Full day rate is required').isNumeric(),
  ],
  photographerController.createProfile
);

// @route   PUT /api/photographers
// @desc    Update photographer profile
// @access  Private (photographer role)
router.put(
  '/',
  [
    authMiddleware,
    authorize(['photographer']),
  ],
  photographerController.updateProfile
);

// @route   POST /api/photographers/portfolio
// @desc    Add portfolio item
// @access  Private (photographer role)
router.post(
  '/portfolio',
  [
    authMiddleware,
    authorize(['photographer']),
    check('type', 'Type must be image or video').isIn(['image', 'video']),
    check('url', 'URL is required').not().isEmpty(),
    check('publicId', 'Public ID is required').not().isEmpty(),
  ],
  photographerController.addPortfolioItem
);

// @route   DELETE /api/photographers/portfolio/:id
// @desc    Delete portfolio item
// @access  Private (photographer role)
router.delete(
  '/portfolio/:id',
  [
    authMiddleware,
    authorize(['photographer']),
  ],
  photographerController.deletePortfolioItem
);

module.exports = router;
