import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
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
        type: Boolean,
        required: true
    },
    houseTrained: {
        type: Boolean,
        required: true
    },
    spayedNeutered: {
        type: Boolean,
        required: true
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
    }
})

const Pet = mongoose.model("Pet", petSchema);
export default Pet;

