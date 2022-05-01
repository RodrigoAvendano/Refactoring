const Reader = require("../../../lib/utils/Reader");

describe("Unit test Reader Class", () => {
    test("Create a Reader object", () => {
        const myReader = Reader.readJsonFile("explorers.json");
        const expected = [
            {
                name: "Woopa4",
                githubUsername: "ajolonauta4",
                mission: "node",
                score: 4,
                stacks: ["javascript"],
            },
        ];
        expect(myReader).toEqual(expect.arrayContaining(expected));
    });
});
