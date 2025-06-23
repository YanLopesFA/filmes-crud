const Filme = require('../models/Filme');

exports.getAll = async (req, res) => res.json(await Filme.find());
exports.getById = async (req, res) => res.json(await Filme.findById(req.params.id));
exports.create = async (req, res) => res.json(await Filme.create(req.body));
exports.update = async (req, res) => res.json(await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => res.json(await Filme.findByIdAndDelete(req.params.id));
