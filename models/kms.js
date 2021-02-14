const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kms = new Schema(
  {
    kmInicio: {
      type: Number,
    },
    kmFim: {
      type: Number,
    },
    
  },
  {
    timestamps: true,
  }
);
mongoose.model('Kms', kms)