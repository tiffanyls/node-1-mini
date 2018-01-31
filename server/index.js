const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(json());

const { read, create, update, destroy } = require('./controllers/books_controllers');

app.post("/api/books", create);
app.get("/api/books", read);
app.put("/api/books/:id", update);
app.delete("/api/books/:id", destroy);

app.listen(port, () =>{
    console.logt("Listening on Port: ${port}");
});