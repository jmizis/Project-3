// const mongoose = require('mongoose');
// added this
const { Schema, model } = require('mongoose');
// added this
const dateFormat = require ('../utils/date')

const toolSchema = new Schema({
  name: {
        type: String,
        required: true
    },
    
  description: {
      type: String,
      required: true
    },
  
  value: {
      type: Number,
      required: true
    },
  
  category: {
      type: Schema.Types.ObjectId,  
      ref: 'Category',
      required: true              
    },
  
  technician: {
      type: Schema.Types.ObjectId,
      ref: 'Technician',
      required: true    
    },
    
    // added this
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
});

const Tools = model('Tools', toolSchema);

module.exports = Tools;