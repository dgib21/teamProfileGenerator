const Employee = require("./Employee");
//creating engineer object and importing constructor from employee
class Engineer extends Employee {
  constructor(name, id, email, role, github) {

    super(name, id, email, role);

    this.github = github;
  }
  // github method to return  github
  getGithub() {
    return this.github;
  }
//need to do something with getrole 

getRole() {
    return "Engineer";
  }


}
module.exports = Engineer;