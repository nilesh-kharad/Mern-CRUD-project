const mongoose = require('mongoose');

const cSchema = mongoose.Schema({
    profile: {
        type: String,
        require: true
    },
    ranking: {
        type: Number,
        require: true,
        trim: true
    },
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
    address: {
        type: String,
        require: true,
        trim:true
    },
    country: {
        type: String,
        require: true,
        trim:true
    },
    state: {
        type: String,
        require: true,
        trim:true
    },
    city: {
        type: String,
        require: true,
        trim:true
    },
    pincode: {
        type: Number,
        require: true,
        trim:true
    },
})

// we are creating a Collection

const dStructure = mongoose.model("dStructure" , cSchema)

module.exports = dStructure;