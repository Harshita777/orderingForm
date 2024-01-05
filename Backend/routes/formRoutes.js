const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/api/formdata', formController.storeFormData);
router.get('/api/formdata/get', formController.getFormData);

module.exports = router;
