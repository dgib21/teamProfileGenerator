
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    //add constructor from parent 'Employee' object
    super(name, id, email, role);

    this.school = school;
  }
  // getSchool()
  getSchool() {
    return this.school;
  }

  // how to override to return getRole()? 
  //getRole() {
    //return this.role;
  //}

}
module.exports = Intern;