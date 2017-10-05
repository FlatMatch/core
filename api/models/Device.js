/**
 * Device.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const crypto = require('crypto');

module.exports = {

  attributes: {

    owner: {
      model: 'User'
    },

    authToken: {
      type: 'longtext',
      required: true
    },

  },

  /* Generate a random authToken */
  beforeCreate: (values, cb) => {
    crypto.randomBytes(256, (err, buf) => {
      if (err) cb(err);
      values.token = buf.toString('hex');
      cb();
    });
  }

};

