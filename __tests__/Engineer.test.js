const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

//maybe should have done an API test to see if its a valid github username
test("testing for github username", () => {
  const engineer = new Engineer("placeholder", 1, "placeholder", "placeholder", "dgib21");

  expect(engineer.github).toBe("dgib21");
});

