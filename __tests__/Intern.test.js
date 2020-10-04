const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

//creating Intern object and importing constructor from employee
test("creates a school name", () => {
  const intern = new Intern("Devin", 1, "test@gmail.com", "Intern", "UTSA");
  
  expect(intern.school).toBe("UTSA");

});

