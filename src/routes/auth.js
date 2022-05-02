const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = express.Router();
router.use(bodyParser.json());
router.use(cors());

const users = [
  {
    id: 1,
    firstName: "David",
    lastName: "Cohen",
    email: "david.cohen@email.com",
    password: "123456",
    startDate: "01/05/2020",
    managerId: null,
    role: "CEO",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    password: "112233",
    startDate: "01/09/2020",
    managerId: 1,
    role: "QA Manager",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Cohen",
    email: "bob.cohen@email.com",
    password: "223344",
    startDate: "05/05/2022",
    managerId: 2,
    role: "RnD Manager",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Don",
    email: "alice.don@email.com",
    password: "123456",
    startDate: "01/01/2021",
    managerId: 1,
    role: "QA Engineer",
  },
  {
    id: 5,
    firstName: "Betty",
    lastName: "Cohen",
    email: "betty.cohen@email.com",
    password: "123456",
    startDate: "07/03/2019",
    managerId: 2,
    role: "SW Engineer",
  },
  {
    id: 6,
    firstName: "Ed",
    lastName: "Co",
    email: "ed.co@email.com",
    password: "334455",
    startDate: "22/08/2019",
    managerId: 2,
    role: "SW Engineer",
  },
  {
    id: 7,
    firstName: "Ruth",
    lastName: "Cohn",
    email: "ruth.cohn@email.com",
    password: "334455",
    startDate: "5/06/2019",
    managerId: 1,
    role: "Sales",
  },
];

const loginCheck = async (res, email, password) => {
  const length = users.length;
  let counter = 0;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      res.status(201).send({ email });
    } else counter++;
  });
  if (counter === length) res.status(403).send({ message: "NO" });
};

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  return await loginCheck(res, email, password);
});

module.exports = router;
