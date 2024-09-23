import db from '../db.js';

const Schema = db.Schema;

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    }
});

const User = db.model('User', userSchema);

export default User;