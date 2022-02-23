const mongoose = require('mongoose');

const RSchema = mongoose.Schema({
   
    name: {
        type: String,
        require: true,
        trim: true
    },
    
    mobile: {
        type: Number,
        require: true,
        trim:true,
        

    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim:true
    },
})

// we are creating a Collection

const registration = mongoose.model("registration" , RSchema)

module.exports = registration;