const mongoose = require('mongoose');

const subsubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    
    image: {
        type: String,
        default: ''
    },
    parentCategory :{
        type: String,
        default: ''
    },
    subCategory :{
         type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: 1
    },
    order: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: ''
    },
});

const subsubCategoryModal = mongoose.model('sub_sub_categories', subsubCategorySchema);

module.exports = subsubCategoryModal;