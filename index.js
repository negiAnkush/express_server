import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>welcome to the express page</h1>");
    console.log("msg send to client");
});

app.get("/about", (req, res) => {
    res.send("<h1> Welcome to the about page </h1>")
});

app.listen(3000, () => {
    console.log(`server is running on ${port}  `)
});