const mongoose = require('mongoose');


const propSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        unique:[true, 'Name already present']
    },
    city: {
        type: String, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    bedroom: {
        type: Number, 
        required: true
    },
    bathroom: {
        type: Number, 
        required: true
    }
   
})

const Property = mongoose.model('Prop', propSchema);

module.exports = Property;