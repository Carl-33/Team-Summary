const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, school){
    super(name, "Intern", email);
    this.name = name;
    this.email = email;
    this.school = school;
  }

 }
module.exports = Intern;
