import db from '../db.js';
import driverSchema from './driver_model.js';

const Schema = db.Schema;

const vehicleSchema = new Schema({
    number: {
        type: Schema.Types.Number,
        required: true
    },
    driver: driverSchema
});

const Vehicle = db.model('Vehicle', vehicleSchema);

export default Vehicle;