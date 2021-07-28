const { success, failed } = require("../config/response");
const models = require("../models");

exports.database = async (req, res) => {
    try {
        const data = await models.insurance.findAll();
        return res.json(success({ data }));
    } catch (error) {
        return res.json(failed({ message: error.message }));
    }
};

exports.createData = async (req, res) => {
    const payload = {
        name: req.body.name,
        active: req.body.active
    };
    try {
        const data = await models.insurance.create(payload);
        return res.json(success({ message: "Data added!", data }));
    } catch (error) {
        return res.json(failed({ message: error.message }));
    }
};

exports.updateData = async (req, res) => {
    const payload = {
        name: req.body.name,
        active: req.body.active
    };
    const where = {
        id: req.body.id
    };
    try {
        const data = await models.insurance.update(payload, { where });
        return res.json(success({ message: "Data updated!", data }));      
    } catch (error) {
        return res.json(failed({ message: error.message }));
    }
};

exports.deleteData = async (req, res) => {
    const where = {
        id: req.params.id,
    };
    try {
        const data = await models.insurance.destroy({ where });
        return res.json(success({ message: "Data deleted!", data }));
    } catch (error) {
        return res.json(failed({ message: error.message }));
    }
};