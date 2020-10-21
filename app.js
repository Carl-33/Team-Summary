const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];
const render = require("./lib/htmlRenderer");
function makeTeam () {
  inquirer.prompt([
  {
    type: "input",
    name: "nameChoice",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "emailChoice",
    message: "What is you email address?"
  },
  {
    type: "list",
    name: "roleChoice",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    name: "officeNumberChoice",
    message: "What is your office number?",
    when: function (info) {
      return (info.roleChoice === "Manager")
    }
  },
  {
    type: "input",
    name: "gitHubChoice",
    message: "What is your gitHub User name?",
    when: function (info) {
      return (info.roleChoice === "Engineer")
    }
  },
  {
    type: "input",
    name: "schoolChoice",
    message: "What school do you go to?",
    when: function (info) {
      return (info.roleChoice === "Intern")
    }
  },
  {
    type: "confirm",
    name: "addUser",
    message: "Would you like to add another team member?"
  }
]).then(function (data) {  
  
  if (data.roleChoice === "Manager"){
    const manager = new Manager(data.nameChoice, data.emailChoice, data.officeNumberChoice);
    team.push(manager);
    console.log(`Added ${data.nameChoice} the ${data.roleChoice} to the team`)
  };
  if(data.roleChoice === "Engineer"){
    const engineer = new Engineer(data.nameChoice, data.emailChoice, data.gitHubChoice);
    team.push(engineer);
    console.log(`Added ${data.nameChoice} the ${data.roleChoice} to the team`)
  };
  if(data.roleChoice === "Intern"){
    const intern = new Intern(data.nameChoice, data.emailChoice, data.schoolChoice);
    team.push(intern);
    console.log(`Added ${data.nameChoice} the ${data.roleChoice} to the team`)
  };
  if (data.addUser === true){
    makeTeam();
  };
  if (data.addUser === false){
    console.log("Finished building team")
    fs.writeFileSync(outputPath, render(team));
  }


})


}



makeTeam();
// outputTeam();

// function outputTeam () {
//   console.log("yo it's the team yall " + team)
//   fs.writeFileSync(outputPath, JSON.stringify(team))
// }



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

