const mongoose = require('mongoose');

const PresencaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    resumo: { type: String, required: true },
    localizacao: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    foto: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Presenca', PresencaSchema);
