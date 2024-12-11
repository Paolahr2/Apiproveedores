const express = require('express');
const Proveedor = require('../models/Proveedor');
const router = express.Router();

// Obtener todos los proveedores
router.get('/', async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo proveedor
router.post('/', async (req, res) => {
  const proveedor = new Proveedor({
    name: req.body.name,
    address: req.body.address,
    cellphone: req.body.cellphone,
    email: req.body.email,
  });

  try {
    const nuevoProveedor = await proveedor.save();
    res.status(201).json(nuevoProveedor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un proveedor
router.put('/:id', async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un proveedor
router.delete('/:id', async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado' });
    res.json({ message: 'Proveedor eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
