import express from 'express';
import driver_controller from '../controllers/driver_controller.js';
const router = express.Router();

router.post('/', driver_controller.store);
router.get('/', driver_controller.index);
router.get('/:id', driver_controller.show);
router.put('/:id', driver_controller.update);
router.delete('/:id', driver_controller.destroy);

export default router;