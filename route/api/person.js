const express = require("express");
const router = express.Router();

// replace with server data
let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = (notes) => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

// get all data
router.get("/", (req, res) => {
  console.log(generateId(data));

  res.send(data);
});

// fetching a single request
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  const newData = data.find((cur) => cur.id === id);
  if (newData) {
    res.send(newData);
  } else {
    res.status(404).end();
  }
});

// delete an id
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  data = data.filter((ptr) => ptr.id !== id);

  res.status(204).json({ message: "Your request has been succesfully sent!" });
});

// adding an id and data
router.post("/", (req, res) => {
  const body = req.body;
  const { name, number } = req.body;
  console.log(body);
  if (!name || !number) {
    return res
      .status(400)
      .json({ error: "Either name and number parameter is Empty!" });
  }
  const itemId = generateId(data);

  const itemToAdd = { id: itemId, ...body };
  data.push(itemToAdd);
  res.status(201).json(itemToAdd);
});

module.exports = router;
