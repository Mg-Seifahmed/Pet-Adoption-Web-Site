import mongoose from "mongoose";

const petRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    characteristics: {
        type: String,
        required: true
    },
    health: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    adult: {
        type: String,
    },
    houseTrained: {
        type: String,
    },
    spayedNeutered: {
        type: String,
    },
    gender: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
    },
    pEmail: {
        type: String,
    }
})

const Pet_Request = mongoose.model("Pet_Request", petRequestSchema);
export default Pet_Request;

