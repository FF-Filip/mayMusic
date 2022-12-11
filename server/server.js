const express = require('express');
const app = express();

app.get("/api", (request, response) => {
    response.json({ "users" : ["userOne", "userTwo" ,"userThree"] });
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