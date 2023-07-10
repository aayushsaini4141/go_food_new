const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/creatuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const requestBody = JSON.parse(req.body);

            const { name, password, email, location } = requestBody;

            await User.create({
                name,
                password,
                email,
                location
            });
            // user.save();

            return res.status(200).json({ message: 'User created successfully' });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Invalid JSON format', err: error });
        }
    }
)
// res.json({success:true});

// } catch (error){
//     console.log(error);
//     res.json({success:false});
// }
// })

router.post("/loginuser", [
    body('email', 'Incorrect Email').isEmail(),

    body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(404).json({ errors: "try logging with correct credentials" })
            }
            if (req.body.password !== userData.password) {
                return res.status(404).json({ errors: "try logging with correct credentials" })
            }

            return res.json({ success: true })


        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Invalid JSON format', err: error });
        }
    }
)

module.exports = router;