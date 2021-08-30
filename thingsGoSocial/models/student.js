const mongoose = require("mongoose");
const Student = mongoose.model('Student', {
    name: {type: String},
    contact: {type: String},
    subject: {type: String},
    class: {type: String},
    society: {type: String},
    year: {type: String}
});

module.exports = Student;