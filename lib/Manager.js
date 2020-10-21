const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, officeNumber) {
    super(name, "Manager", email);
    this.name = name;
    this.email = email;
    this.officeNumber = parseInt(officeNumber);
    this.Id = Math.floor(Math.random() *10)+1
  }
  getRole () {
    return this.role;
  }
  getName () {
    return this.name;
  }
  getEmail () {
    return this.email;
  }
  getId () {
    return this.Id
  }
  getOfficeNumber () {
    return this.officeNumber;
  }
}

module.exports = Manager;
