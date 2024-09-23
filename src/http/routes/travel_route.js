import express from 'express';
import travel_controller from '../controllers/travel_controller.js';
const router = express.Router();

router.post('/', travel_controller.store);
router.get('/', travel_controller.index);
router.get('/:id', travel_controller.show);
router.put('/:id', travel_controller.update);
router.delete('/:id', travel_controller.destroy);

export default router;