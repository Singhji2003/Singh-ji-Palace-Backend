const express = require('express');
const router = express.Router();
const Feedback = require('../modals/Feedback')


router.post('/', async (req, res) => {
    try {
        const { name, number, email, feedback } = req.body
        const userdata = await Feedback.create({ name, number, email, feedback });
        return res.status(400).json({ msg: "Your Feedback have been Submitted Thank you 😊", success: 'true' })
    }
    catch {
        res.status(400).json({ msg: "Internal server error", success: 'false' })
    }
})


module.exports = router;
