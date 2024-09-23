import db from '../db.js';
import routeSchema from './route_model.js';
import vehicleSchema from './vehicle_model.js';

const Schema = db.Schema;

const travelSchema = new Schema({
    destiny: {
        type: Schema.Types.String,
        required: true
    },
    date: {
        type: Schema.Types.Date,
        required: true
    },
    route: routeSchema,
    vehicle: vehicleSchema
});

const Travel = db.model('Travel', travelSchema);

export default Travel;