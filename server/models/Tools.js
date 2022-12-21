const mongoose = require('mongoose');
const { Schema } = mongoose;

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
      type: number ,
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
    } 
});

const Tools = mongoose.model('Tools', toolSchema);

module.exports = Tools;