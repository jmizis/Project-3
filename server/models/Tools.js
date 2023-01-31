// const mongoose = require('mongoose');
// added this
const { Schema, model } = require('mongoose');

const dateFormat = require ('../utils/date')

const toolSchema = new Schema({
  toolName: {
        type: String,
        required: true
    },
    
  description: {
      type: String,
      required: true
    },
  
  value: {
      type: String,
      required: true
    },
  
  
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
});

const Tools = model('Tools', toolSchema);

module.exports = Tools;