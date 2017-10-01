/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

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

