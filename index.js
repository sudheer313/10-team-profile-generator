const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generateHtml.js");
const empArray = [];
function newManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "full_name",
        message: "Please enter managers name?(*)",
      },
      {
        type: "input",
        name: "company_id",
        message: "Please enter  employee ID(*)?",
      },
      {
        type: "input",
        name: "email_id",
        message: "Please enter  email address(*)?",
      },
      {
        type: "input",
        name: "office_Number",
        message: "Please enter  office number(*)?",
      },
    ])
    .then((respose) => {
      console.log(respose);
      let full_name = respose.full_name;
      let company_id = respose.company_id;
      let email_id = respose.email_id;
      let office_Number = respose.office_Number;
      let manager = new Manager(full_name, company_id, email_id, office_Number);
      empArray.push(manager);
      employeeDetails();
    });
}

function employeeDetails() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Engineer or Intern?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "git_hub",
        message: "enter github user name",
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please Enter employee School details",
        when: (answers) => answers.role === "Intern",
      },
      {
        type: "input",
        message: "Please Enter employee name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter employee's email address",
        name: "email",
      },
      {
        type: "input",
        message: "Please Enter ID",
        name: "id",
      },

      {
        type: "confirm",
        message: " Do you like to add another employee?",
        name: "add",
      },
    ])
    .then((response) => {
      console.log(response);
      let name = response.name;
      let id = response.id;
      let email_id = response.email;

      if (response.role == "Intern") {
        let school = response.school;
        let intern = new Intern(name, id, email_id, school);
        empArray.push(intern);
      } else if (response.role == "Engineer") {
        let git_hub = response.git_hub;
        let engineer = new Engineer(name, id, email_id, git_hub);
        empArray.push(engineer);
      }
      console.log(empArray);

      if (response.add == true) {
        employeeDetails();
      } else {
        createHtml();
      }
    });
}

const createHtml = () => {
  fs.writeFile("index.html", generateHtml(empArray), (err) => {
    err
      ? console.log("Error! team profile is not created")
      : console.log("success! yor team profile is created");
  });
};
newManager();

// referred jessamyn27/Team-Profile-Generator-JS-Node-Jest
//ask BCS
// referred ashachakre0906/team-Profile-Generator
//https://www.npmjs.com/package/inquirer
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules











