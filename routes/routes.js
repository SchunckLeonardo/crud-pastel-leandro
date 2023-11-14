const express = require('express')
const router = express.Router()
const PastelController = require('../controllers/PastelController')

router.get("/", PastelController.getAll)
router.get("/:id", PastelController.getById)
router.post("/create", PastelController.create)
router.put("/update/:id", PastelController.update)
router.delete("/delete/:id", PastelController.delete)

module.exports = router