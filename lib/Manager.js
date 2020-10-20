const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, officeNumber) {
    super(name, "Manager", email);
    this.name = name;
    this.email = email;
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
