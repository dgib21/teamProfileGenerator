const Employee = require("./Employee");


//creating manager object that extends Employee
class Manager extends Employee {
    //passing employee constructor properties and adding officeNumber
  constructor(name, id, email, role, officeNumber) {
    //add constructor from parent 'Employee' object with office number
    super(name, id, email, role);

    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;