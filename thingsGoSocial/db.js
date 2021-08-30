const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/thingsGoSocialDB', (err) => {

if (!err){
    console.log("Database connected successfully")
} else{
    console.log("Error in connection" + err)
}
})

module.exports = mongoose;