import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    quantity: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    tags: {
        type: [mongoose.Schema.Types.String],
        required: true,
    },
    ratings: {
        average: {
            type: mongoose.Schema.Types.Number,
        },
        count: {
            type: mongoose.Schema.Types.Number,
        }
    }
});

export default mongoose.model("Product",productSchema)