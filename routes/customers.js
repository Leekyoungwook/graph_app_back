const router = require('express').Router(); 
const customersRoute = require('../controllers/customersCtrl');

router.get('/customers', customersRoute.customers);

module.exports = router; 
