const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, gitHub) {
    super(name, "Engineer", email);
    this.name = name;
    this.email = email;
    this.gitHub = gitHub;
    this.Id = Math.floor(Math.random() *10)+11
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
  getGithub () {
    return this.gitHub;
  }
  getId () {
    return this.Id
  }
}





module.exports = Engineer;
