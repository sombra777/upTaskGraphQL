const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, // hace que los espacios se eliminen cuando se guardan los datos
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Hace que el email sea unico
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  registro: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Usuario", UsuariosSchema);
