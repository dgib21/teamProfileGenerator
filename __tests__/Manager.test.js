
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


test("testing manager role", () => {
    const manager = new Manager("Devin", 1, "test@gmail.com", "Manager", 1);
    //override test
    expect(manager.getRole()).toBe("Manager");
  });

test("testing manager office number", () => {
  const manager = new Manager("Devin", 1, "test@gmail.com", "Manager", 1);

  expect(manager.officeNumber).toBe(1);
});

