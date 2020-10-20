const inquirer = require("inquirer");
const fs = require("fs")


class Employee {
  constructor(name, role, email) {
    this.name = name;
    this.role = role;
    this.email = email;
  }
}




  // if (data.role === "Manager") {
  //   inquirer.prompt({
  //     type: "input",
  //     name: "office number",
  //     message: "What is your office number?"
  //   })
  // };
  // if (data.role === "Engineer") {
  //   inquirer.prompt({
  //     type: "input",
  //     name: "gitHub",
  //     message: "What is your gitHub User name?"
  //   })
  // };
  // if (data.role === "Intern") {
  //   inquirer.prompt({
  //     type: "input",
  //     name: "school",
  //     message: "What school do you go to?"
  //   })
  // }






module.exports = Employee;
