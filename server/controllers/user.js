import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const exists = await User.findOne({email})

        if (!exists) return res.status(404).json({ message: `User doesn't exist.`})

        const matchPass = await bcrypt.compare(password, exists.password);

        if (!matchPass) return res.status(400).json({ message: `Invalid credentials`})

        const token = jwt.sign({ email: exists.email, id: exists._id}, 'test', { expiresIn: "1h" })

        res.status(200).json({ result: exists, token })

    } catch (error) {
        res.status(500).json({ message: `Something went horribly wrong.`})
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const exists = await User.findOne({ email });

        if (exists) return res.status(400).json({ message: `User exists.` })

        if(password !== confirmPassword) return res.status(400).json({ message: `User exists.` })

        const hash = await bcrypt.hash(password, 12) 

        const result = await User.create({ email, password: hash, name: `${firstName} ${lastName}`})

        const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: "1h" })

        res.status(200).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: `Something went horribly wrong.`})
    }
}