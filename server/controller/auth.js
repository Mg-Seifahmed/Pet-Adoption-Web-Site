import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

export const register = async (req, res) => {
    try {
        const { fullName, password, email } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.json("used");
        }

        // Generate salt and hash password
        //const salt = await bcrypt.genSalt();
        //const hash = await bcrypt.hash(password, salt);

        // Create a new User instance
        const user = new User({
            fullName: fullName,
            password: password,
            email: email
        });

        // Save user to the database
        const savedUser = await user.save();

        // Send response
        res.status(200).json(savedUser);
    } catch (err) {
        // Handle errors
        res.status(500).json({ error: err.message });
    }
};




export const login = async (req, res) => {
    try {
        const { password, email } = req.body;


        const m = await User.findOne({email: email});

        //const salt = await bcrypt.genSalt();
        //const hash = await bcrypt.hash(password, salt);

        const p = await User.findOne({password: password});
        
        if (m && p)
            {
                res.json("found");
            }
        else
        {
            res.json("not found");
        }
                



    } catch (err) {
        // Handle errors
        res.status(500).json({ error: err.message });
    }
};
