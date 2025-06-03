const express = require('express');
const User = require('../model/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET || "maneeshauth",
            { expiresIn: '2d' }
        );
        res.status(200).json({ message: 'Login Successful', token, user: { id: user._id, username: user.username, name: user.name, role: user.role } });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/register', async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        const userAlreadyExists = await User.findOne({ username });
        if (userAlreadyExists) {
            return res.status(409).json({ message: "User already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = new User({ name, username, email, password: hashedPassword });
        await createUser.save();

        res.status(201).json({ message: "User registered successfully." });
    }
    catch (error) {
        res.status(500).json({ message: "Server error..." });
    }
})

router.patch("/forget", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User does not exist.' });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: `Password for ${username} updated successfully.` });
    } catch (error) {
        res.status(500).json({ message: "Server error..." });
    }
});


module.exports = router;


