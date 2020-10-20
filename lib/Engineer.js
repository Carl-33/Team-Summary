const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, gitHub) {
    super(name, "Engineer", email);
    this.name = name;
    this.email = email;
    this.gitHub = gitHub;
  }
}





module.exports = Engineer;
