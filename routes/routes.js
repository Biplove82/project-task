const { createData, getData } = require("../controller/userControllers");

var router = require("express").Router();

router.post("/create-data",createData);
router.get("/get-data",getData);


module.exports=router;