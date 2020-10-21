const inquirer = require("inquirer");
const fs = require("fs")


class Employee {
  constructor(name, role, email) {
    this.name = name;
    this.role = role;
    this.email = email;
  }

  getRole() {
    return "employee";
  }
}

module.exports = Employee;
