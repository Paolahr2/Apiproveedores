const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cellphone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
