const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const router = express.Router();
router.use(bodyParser.json());
router.use(cors());

let employees = [];
let employeesObject = {
  topTier: [],
  midTier: [],
  lowTier: [],
};

fs.readFile("./src/data/data.json", (err, data) => {
  if (err) throw err;
  employees = JSON.parse(data);
  employees.map((employee) => {
    if (!employee.managerId) employeesObject.topTier.push(employee);
    else if (employee.managerId === 1) employeesObject.midTier.push(employee);
    else if (employee.managerId === 2 || employee.managerId === 3)
      employeesObject.lowTier.push(employee);
  });
});

router.get("/", async (req, res) => {
  res.send(employeesObject);
});

module.exports = router;
