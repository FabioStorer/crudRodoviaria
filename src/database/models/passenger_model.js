import db from '../db.js';

const Schema = db.Schema;

const passengerSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    }
});

const Passenger = db.model('Passenger', passengerSchema);

export default Passenger;