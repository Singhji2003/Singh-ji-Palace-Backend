const express = require('express');
const router = express.Router();
const WebClient = require('../modals/WebClient')


router.post('/', async (req, res) => {
    try {
        const { name, number, email, theme, message } = req.body
        const clientdata = await WebClient.create({ name, number, email,theme, message });
        return res.status(400).json({ msg: "We have been got your details and will contact you as soon as possible.. Thank you 😊", success: 'true' })
    }
    catch {
        res.status(400).json({ msg: "Internal server error", success: 'false' })
    }
})


module.exports = router;
