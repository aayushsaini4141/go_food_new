const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');

router.post("/creatuser", [
body('email','Incorrect Email').isEmail(),
body('name').isLength({min: 5 }),
body('password','Incorrect Password').isLength({min: 5 })],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // const requestBody = JSON.parse(req.body);

        const { name, password, email, location } = req.body;

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
        return res.status(400).json({ error: 'Invalid JSON format'});
    }
}
)  
// res.json({success:true});

// } catch (error){
//     console.log(error);
//     res.json({success:false});
// }
// })

module.exports = router;