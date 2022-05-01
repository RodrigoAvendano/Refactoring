const Reader = require("../../../lib/utils/Reader");
const FizzBuzzService = require("../../../lib/services/FizzbuzzService");

describe("Unit test FizzBuzzService Class", () => {
  test("Test Method : applyValidationInExplorer using explorers.json", () => {
    const myReader = Reader.readJsonFile("explorers.json");
    const myService = myReader.map((explorer) =>
      FizzBuzzService.applyValidationInExplorer(explorer)
    );
    expected = [
      {
        name: "Woopa3",
        githubUsername: "ajolonauta3",
        score: 3,
        mission: "node",
        stacks: ["elixir", "groovy", "reasonML"],
        trick: "FIZZ",
      },
    ];
    expect(myService).toEqual(expect.arrayContaining(expected));
  });

  test("Test Method : applyValidationInExplorer case 1", () => {
    const explorer1 = { name: "Explorer1", score: 1 };
    const myService = FizzBuzzService.applyValidationInExplorer(explorer1);
    expect(myService.trick).toEqual(1);
  });

  test("Test Method : applyValidationInExplorer case 2", () => {
    const explorer3 = { name: "Explorer3", score: 3 };
    const myService = FizzBuzzService.applyValidationInExplorer(explorer3);
    expect(myService.trick).toEqual("FIZZ");
  });

  test("Test Method : applyValidationInExplorer case 3", () => {
    const explorer5 = { name: "Explorer5", score: 5 };
    const myService = FizzBuzzService.applyValidationInExplorer(explorer5);
    expect(myService.trick).toEqual("BUZZ");
  });

  test("Test Method : applyValidationInExplorer case 4", () => {
    const explorer15 = { name: "Explorer15", score: 15 };
    const myService = FizzBuzzService.applyValidationInExplorer(explorer15);
    expect(myService.trick).toEqual("FIZZBUZZ");
  });
});
