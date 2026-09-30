// ============================================
// routes/adminRoutes.js
// ============================================
const express = require('express');
const router = express.Router();
const {
  getAdminDashboard,
  getAllUsers,
  deleteUser,
  toggleUserStatus,
  getExercises,
  createExercise,
  deleteExercise,
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// All admin routes require JWT + admin role
router.use(protect, adminOnly);

router.get('/dashboard', getAdminDashboard);
router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);
router.put('/user/:id/toggle', toggleUserStatus);
router.route('/exercises').get(getExercises).post(createExercise);
router.delete('/exercises/:id', deleteExercise);

module.exports = router;
