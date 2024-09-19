const Presenca = require('../models/Presenca');

exports.getAllPresencas= async (req, res) => {
    try {
        const presencas = await Presenca.find();
        res.json(presencas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPresenca = async (req, res) => {
    const { nome, resumo, foto, localizacao } = req.body;
    const newPresenca = new Presenca({ nome, resumo, foto, localizacao });

    try {
        const presencaSalva = await newPresenca.save();
        res.status(201).json(presencaSalva);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updatePresenca = async (req, res) => {
    try {
        const updatedPresenca = await Presenca.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPresenca);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deletePresenca = async (req, res) => {
    try {
        await Presenca.findByIdAndDelete(req.params.id);
        res.json({ message: 'Presença deleteda' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
