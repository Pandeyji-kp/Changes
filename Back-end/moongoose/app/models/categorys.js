const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: [true, 'Name is required.'],
        validate: {
            validator: async function (v) {
                const user = await this.constructor.findOne({ username: v });
                return !user; // Return false if user exists
            },
            message: props => 'The specified username is already in use'
        }
    },
    status: {
        type: Boolean,
        default: 1
    },
    quantity : {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
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

const categoryModal = mongoose.model('category', categorySchema);

module.exports = categoryModal;