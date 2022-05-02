const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/",(request, response)=>{
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) =>{
    const mission =request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) =>{
    const mission =request.params.mission;
    const amounthExplorers = ExplorerController.getExplorersAmonutByMission(mission);
    response.json(amounthExplorers);
});

app.get("/v1/explorers/usernames/:mission", (request, response) =>{
    const mission=request.params.mission;
    const explorersNames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersNames);
});

app.get("/v1/fizzbuzz/:number", (request, response) =>{
    const mission=request.params.number;
    const number = ExplorerController.getNumber(mission);
    response.json(number);
});

app.listen(port, ()=>{
    console.log(`FizzBuzz API in localhost:${port}`);
});