var express = require("express")
var fs = require('fs')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

const jsonfile = require("jsonfile")

const corsOptions = {
  origin: [
    'http://localhost:8080',
    'http://localhost:3000'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))
app.use(express.static('dist'))

app.use(bodyParser.json())

const file = 'tasks.json'

app.get("/tasks", (req, res) => {

  if (fs.existsSync(file)) {
    // response json file data
    jsonfile.readFile(file)
      .then(data => {
        res.status(200).send(data)
      })
  } else {
    // create empty file then response
    fs.appendFile(file, "[]", (err) => {
      if (err) console.log(err)
      res.status(200).send([])
    })
  }
})

app.post("/tasks", (req, res) => {
  // get new task from request data
  let newTask = req.body
  jsonfile.readFile(file)
    .then(data => {
      data.unshift(newTask)
      return data
    })
    .then(data => {
      jsonfile.writeFile(file, data)
    }).then(() => {
      res.status(200).send(newTask)
    })
})

app.put("/task/:id", (req, res) => {
  // get new task from request data
  let index = req.params.id
  jsonfile.readFile(file)
    .then(data => {
      data[index].type === 'IN_PROGRESS'
        ? data[index].type = 'COMPLETE'
        : data[index].type = 'IN_PROGRESS'
      return data
    })
    .then(data => {
      jsonfile.writeFile(file, data)
      return data
    }).then(data => {
      res.status(200).send(data[index])
    })
})

app.delete("/task/:id", (req, res, next) => {
  // get the json file
  // response json file data
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})