const Controller = require("../../../lib/controllers/ExplorerController");

describe("Unit test for ExplorerController Class", () => {
  test("1. Testing getExplorersByMission method", () => {
    const myMissions = Controller.getExplorersByMission("node");
    const expected = [
      {
        name: "Woopa3",
        githubUsername: "ajolonauta3",
        score: 3,
        mission: "node",
        stacks: ["elixir", "groovy", "reasonML"],
      },
    ];
    expect(myMissions).toEqual(expect.arrayContaining(expected));
  });

  test("2. Testing getExplorersUsernamesByMission method", ()=>{
      const myExplorers = Controller.getExplorersUsernamesByMission("node")
      const expected = ["ajolonauta14"]
      expect(myExplorers).toEqual(expect.arrayContaining(expected));
  })

  test("3. Testing getExplorersAmonutByMission method", ()=>{
    const myTotal = Controller.getExplorersAmonutByMission("node")
    expect(myTotal).toBe(13)
  })
});
