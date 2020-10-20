const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];

function makeTeam () {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is you email address?"
  },
  {
    type: "list",
    name: "role",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
    when: function (info) {
      return (info.role === "Manager")
    }
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub User name?",
    when: function (info) {
      return (info.role === "Engineer")
    }
  },
  {
    type: "input",
    name: "school",
    message: "What school do you go to?",
    when: function (info) {
      return (info.role === "Intern")
    }
  },
  {
    type: "confirm",
    name: "addUser",
    message: "Would you like to add another team member?"
  }
]).then(function (data) {  
  
  if (data.role === "Manager"){
    manager = new Manager(data.name, data.email, data.officeNumber)
    team.push(manager)
  };
  if(data.role === "Engineer"){
    engineer = new Engineer(data.name, data.email, data.gitHub)
    team.push(engineer)
  };
  if(data.role === "Intern"){
    intern = new Intern(data.name, data.email, data.school)
    team.push(intern)
  };
  if (data.addUser === true){
    console.log(team);
    makeTeam();
  };
  if (data.addUser === false){
    console.log("done already?")
    console.log(team);

// add reference to some sort of render function here. 

  }


})

}

makeTeam();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

