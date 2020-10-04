const Employee = require("../lib/Employee");

//testing for object
test("creates an employee object", () => {
  //creating employee object to test and passing it parameters
    const employee = new Employee("Devin", 1, "tester@gmail.com");
//expecting name to be any string 
  expect(employee.name).toEqual(expect.any(String));
  //expecting ID to be a number 
  expect(employee.id).toEqual(expect.any(Number));
  //expecting email to contain the @ symbol
  expect(employee.email).toEqual(expect.stringContaining("@"));
});
// testing getName method 
test("get name from getName method", () => {
  //creating new employee object passing it the name variable 
    const employee = new Employee("Devin");
    //expecting the name to be a string
  expect(employee.getName()).toEqual(expect.any(String));
});


// testing email validation
test("testing for valid email", () => {
  const employee = new Employee("Devin", 1, "tester@gmail.com");

  expect(employee.getEmail()).toEqual("tester@gmail.com");
});

// verify get role returns employee
test("verify get role returns employee", () => {
  const employee = new Employee("Devin", 1, "", "Employee");
  expect(employee.getRole()).toBe("Employee");
});