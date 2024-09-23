import db from '../db.js';

const Schema = db.Schema;

const driverSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    phoneNumber: {
        type: Schema.Types.Number,
        required: true
    }
});

const Driver = db.model('Driver', driverSchema);

export default Driver;