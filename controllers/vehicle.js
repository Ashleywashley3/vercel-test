const router = require('express').Router()
const Vehicle = require('../models/vehicle')

router.get('/', async (req, res) => {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
})

router.post('/', async (req, res) => {
    const vehicle = await new Vehicle(req.body).save()
    res.json(Vehicle)
})

module.exports = router
