/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    // First name required for communicating.
    firstName: {
      type: 'string',
      required: true
    },

    // Last name required for setting up profile with university email.
    lastName: {
      type: 'string',
      required: true
    },

    // Unique email required to verify student.
    email: {
      type: 'string',
      required: true,
      unique: true
    },

    // Password required for authentication.
    password: {
      type: 'string',
      required: true
    },

    /**********************\
      Matchable Attributes
    \**********************/
    
    gender: {
      type: 'string',
      enum: ['Male', 'Female', 'Other'],
      required: true
    },

    age: {
      type: 'integer',
      required: true
    },

    yearOfStudy: {
      type: 'interger',
      required: true
    },

    bio: {
      type: 'longtext'
    }

  },

  // Called before a User model is created, will hash the password; returns error if hashing fails.
  beforeCreate: (values, cb) => {
      // Hash password
      bcrypt.hash(values.password, 10, function(err, hash) {
          if(err) return cb(err);
          values.password = hash;
          cb();
      });
  },

};

