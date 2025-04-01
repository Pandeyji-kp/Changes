const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
    question : {
        type : String,
        required : [true, 'question is required.'],
    },
    answer : {
        type : String,
        required : [true, 'answer is required.'],
    },
    status : {
        type : Boolean,
        default : 1
    },
    order : {
        type : Number,
        default : 0
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : ''
    },
});

const FaqModal = mongoose.model('Faq',FaqSchema);

module.exports = FaqModal;