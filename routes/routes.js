const express = require('express')
const router = express.Router()
const PastelController = require('../controllers/PastelController')

router.get("/", PastelController.getAll)
router.get("/:id", PastelController.getById)
router.post("/", PastelController.create)
router.put("/:id", PastelController.update)
router.delete("/:id", PastelController.delete)

module.exports = router