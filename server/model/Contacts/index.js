const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', { name: String , phoneNumber: String , createdBy: String , createdAt: {type: Date , default: Date.now}} );

module.exports = {Contact}