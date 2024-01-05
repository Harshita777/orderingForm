const FormData = require('../models/formModel');

exports.storeFormData = async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).json({ message: 'Form data stored successfully' });
    } catch (error) {
        console.error('Error storing form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getFormData = async (req, res) => {
    try {
        const formData = await FormData.find();
        res.status(201).json({ message: 'Form data retrieved successfully', data: formData });
    } catch (error) {
        console.error('Error retrieving form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
