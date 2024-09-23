import db from '../db.js';

const Schema = db.Schema;

const routeSchema = new Schema({
    start: {
        type: Schema.Types.String,
        required: true
    },
    end: {
        type: Schema.Types.String,
        required: true
    },
    distance: {
        type: Schema.Types.Number,
        required: true
    }
});

const Route = db.model('Route', routeSchema);

export default Route;