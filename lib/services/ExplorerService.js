const Reader = require("../utils/Reader");
class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNode;
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNode.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    const usernames = explorersInNode.map(
      (explorer) => explorer.githubUsername
    );
    return usernames;
  }
}

module.exports = ExplorerService;
