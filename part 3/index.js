//defini tus constantes
const express = require("express");
const cors = require("cors")
const morgan = require("morgan");
const app = express();
//json
let persons = [
  {
    name: "Arto Hellas",
    num: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    num: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    num: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    num: "39-23-6423122",
    id: 4,
  },
];

app.use(express.json());
app.use(cors())



app.get("/",morgan('dev'), (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

let generateId = () => Math.round(Math.random() * 999);

app.post("/api/persons",morgan('dev'),(req, res) => {
  
  const body = req.body;
  let search = persons.some((n) => {
    return n.name.toLowerCase() === body.name.toLowerCase();
  });
  if ((!body.name, !body.num)) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  if (search === true) {
    return res.status(400).json({
      error: "repeated name",
    });
  }

  const person = {
    name: body.name,
    num: body.num,
    id: generateId(),
  };
  console.log(body)
  persons = persons.concat(person);
  res.json(person);
});

app.get("/api/info", (req, res) => {
  let count = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  let data = new Date();
  res.send(
    `<div> phonebook has info for ${count} people </div><div>${data}</div>`
  );
});

//instancia donde se escucha
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
