const Reader = require("../../../lib/utils/Reader");
const Service = require("../../../lib/services/ExplorerService");

describe("Unit test ExplorerService Class", () => {
  test("Test Method : filterByMission", () => {
    const myReader = Reader.readJsonFile("explorers.json");
    const myService = Service.filterByMission(myReader, "node");
    expected = [
      {
        name: "Woopa4",
        githubUsername: "ajolonauta4",
        mission: "node",
        score: 4,
        stacks: ["javascript"],
      },
    ];
    expect(myService).toEqual(expect.arrayContaining(expected));
  });

  test("Test Method : getAmountOfExplorersByMission", () => {
    const myReader = Reader.readJsonFile("explorers.json");
    const myService = Service.getAmountOfExplorersByMission(myReader, "node");
    expect(myService).toBe(10);
  });

  test("Test Method : getExplorersUsernamesByMission", () => {
    const myReader = Reader.readJsonFile("explorers.json");
    const myService = Service.getExplorersUsernamesByMission(myReader, "node");
    expected = ["ajolonauta3"];
    expect(myService).toEqual(expect.arrayContaining(expected));
  });
});
