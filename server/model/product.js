const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    oldPrice: { 
        type: Number, 
        required: true 
    }, 
    newPrice: { 
        type: Number, 
        required: true 
    },
    stockStatus: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    }, 
    images: { 
        type: [String], 
        required: true 
    }
});

module.exports = mongoose.model('Product', productSchema);
