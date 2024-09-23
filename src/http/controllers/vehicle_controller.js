import Vehicle from '../../database/models/vehicle_model.js';

const store = async (req, res) => {
    try {
        await Vehicle.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await Vehicle.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const show = async (req, res) => {
    try {
        const content = await Vehicle.find(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();
    } catch (error) {
        res.status(400).json();
    }
};

const destroy = async (req, res) => {
    try {
        await Passenger.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json();
    }
};

export default {
    store,
    index,
    show,
    update,
    destroy
};