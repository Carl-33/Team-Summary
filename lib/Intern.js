const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, school){
    super(name, "Intern", email);
    this.name = name;
    this.email = email;
    this.school = school;
    this.Id = Math.floor(Math.random() *10)+21
  }
  getRole () {
    return this.role;
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
  getSchool () {
    return this.school;
  }
  getId () {
    return this.Id
  }
 }
module.exports = Intern;
