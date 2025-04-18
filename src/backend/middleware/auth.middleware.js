
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

/**
 * Authentication middleware
 * Verifies JWT token and adds user data to request object
 */
exports.authMiddleware = async (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user by id
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    // Add user data to request
    req.user = {
      id: user._id,
      role: user.role
    };
    
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

/**
 * Role-based authorization middleware
 * @param {string[]} roles - Array of allowed roles
 */
exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `User role ${req.user.role} is not authorized to access this resource`
      });
    }
    
    next();
  };
};
