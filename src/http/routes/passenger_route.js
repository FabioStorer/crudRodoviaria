import express from 'express';
import passenger_controller from '../controllers/passenger_controller.js';
const router = express.Router();

router.post('/', passenger_controller.store);
router.get('/', passenger_controller.index);
router.get('/:id', passenger_controller.show);
router.put('/:id', passenger_controller.update);
router.delete('/:id', passenger_controller.destroy);

export default router;