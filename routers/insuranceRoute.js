const express = require("express");
const router = express.Router();
const insuranceController = require("../controller/insuranceController.js");

router.get("/", insuranceController.database);

router.get("/:id", insuranceController.database);

router.post("/", insuranceController.createData);

router.put("/", insuranceController.updateData);

router.delete("/:id", insuranceController.deleteData);

module.exports = router;