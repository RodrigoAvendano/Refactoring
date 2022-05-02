const Reader =require("../utils/Reader")
const Explorer = require("../services/ExplorerService")
const FizzBuzz = require("../services/FizzbuzzService")

class ExplorerController{

    static getExplorersByMission(mission){
       const explorers = Reader.readJsonFile("explorers.json")
       const explorersMission = Explorer.filterByMission(explorers, mission)
       return explorersMission
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersNames = Explorer.getExplorersUsernamesByMission(explorers, mission)
        return explorersNames
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const total = Explorer.getAmountOfExplorersByMission(explorers, mission)
        return total
    }
}

module.exports = ExplorerController