import express from 'express';
import route_controller from '../controllers/route_controller.js';
const router = express.Router();

router.post('/', route_controller.store);
router.get('/', route_controller.index);
router.get('/:id', route_controller.show);
router.put('/:id', route_controller.update);
router.delete('/:id', route_controller.destroy);

export default router;