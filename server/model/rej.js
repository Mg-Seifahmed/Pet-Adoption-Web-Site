import mongoose from "mongoose";

const rejSchema = new mongoose.Schema({
    reject: {
        type: String,

    },
    user: {
        type: Object
    }
})

const Rej = mongoose.model("rejfe", rejSchema);
export default Rej;

