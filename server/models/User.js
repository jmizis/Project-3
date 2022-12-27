const mongoose = require('mongoose');
// added this 
const Technician = require('./Technician')
const Tool = require('./Tools')
const { Schema } = mongoose;
// added this
const bcrypt = require('bcrypt');



// might need an id here for login
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true
  },

  // added this array of technician types
  technician : [{
    type: Schema.Types.ObjectId,  
      ref: 'Technician',
  }],

  // added this array for tools
  tool : [{
    type: Schema.Types.ObjectId,  
      ref: 'Tools',
  }]

});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    
    next();
});
    
// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
    

const User = mongoose.model('User', userSchema);

module.exports = User;