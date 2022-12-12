const express = require('express');
const app = express();
const Users = require('./users.json');

app.get("/api", (request, response) => {
    response.json(Users);
});

const port = 3001;

app.listen(port, error => {
    if(error)
    {
        console.log("Server connection error", error);
    }
    else
    {
        console.log("Server running on port " + port);
    }
});