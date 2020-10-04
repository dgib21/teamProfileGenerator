//creating an employee object with four parameters 
class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }

    // getting name from constructor 
  getName() {
    return this.name;
  }

  // returning ID from employee constructor
  getId() {
    return this.id;
  }

  // returning email from employee constructor
  getEmail() {
    return this.email;
  }

  //returning the role from employee constructor 
  getRole() {
    return this.role;
  }
  
}

module.exports = Employee;
