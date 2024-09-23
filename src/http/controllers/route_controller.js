import Route from '../../database/models/route_model.js';

const store = async (req, res) => {
    try {
        await Route.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await Route.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const show = async (req, res) => {
    try {
        const content = await Route.find(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        await Route.findByIdAndUpdate(req.params.id, req.body).exec();
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