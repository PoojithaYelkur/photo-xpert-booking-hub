
const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/auth.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    check('role', 'Role must be either user or photographer').optional().isIn(['user', 'photographer']),
  ],
  authController.register
);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.login
);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', authMiddleware, authController.getMe);

// @route   PUT /api/auth/me
// @desc    Update user profile
// @access  Private
router.put('/me', authMiddleware, authController.updateProfile);

// @route   PUT /api/auth/password
// @desc    Change password
// @access  Private
router.put(
  '/password',
  [
    authMiddleware,
    check('currentPassword', 'Current password is required').exists(),
    check('newPassword', 'New password must be at least 6 characters').isLength({ min: 6 }),
  ],
  authController.changePassword
);

module.exports = router;
