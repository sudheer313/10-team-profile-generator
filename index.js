
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHtml = require("./src/generateHtml.js");
const path = require ('path');


const team_Members = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name?(Required)",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter  employee ID(Required)?",
  },
  {
    type: "input",
    name: "emailaddress",
    message: "Please enter  email address(Required)?",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter  office number(Required)?",
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Who would you like to add next?",
    choices: ['Engineer','Intern','Complete building the team'],
  }
];
//questions array for engineer
const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter  name(Required)?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter  employee ID(Required)?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "Please enter your  address(Required)?",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter github username(Required)?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Who would you like to add next(Required)?",
      choices: ['Engineer','Intern','complete building the team'],
    }
  ];
  
const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "Please enter your name(Required)?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your employee ID(Required)?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "Please enter your email address(Required)?",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter your school name(Required)?",
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like to add next?",
        choices: ['Engineer','Intern','finish building the team'],
      }
  ];
  
function addManager() {
    inquirer.prompt(managerQuestions).then((managerResponse) => {
      console.log(managerResponse);
      const manager = new Manager(
          managerResponse.name,
          managerResponse.id,
          managerResponse.emailaddress,
          managerResponse.office,
      );
      team_Members.push(manager);
      switch (managerResponse.addEmployee){
        case 'Engineer':
            addEngineer();
           break;
        case  'Intern':
            addIntern();
            break;
        default : 
        return writeToFile(team_Members); //default is executed when none of the cases match the evaluated expression.      
      }
    });
  }
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    const engineer = new Engineer(
        engineerResponse.name,
        engineerResponse.id,
        engineerResponse.emailaddress,
        engineerResponse.github
    );
    team_Members.push(engineer);
    switch (engineerResponse.addEmployee){
        case 'Engineer':
           addEngineer();
           break;
        case  'Intern':
            addIntern();
            break;
        default : 
        return writeToFile(team_Members);       

      }
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((internResponse) => {
    const intern = new Intern(
        internResponse.name,
        internResponse.id,
        internResponse.emailaddress,
        internResponse.school
    );
    team_Members.push(intern);
    switch (internResponse.addEmployee){
        case 'Engineer':
           addEngineer();
           break;
        case  'Intern':
            addIntern();
            break;
        default : 
        return writeToFile(team_Members);    
      }
  });
}
 addManager();
 
function writeToFile(data) {
fs.writeFile('./dist/index.html', generateHtml(data),'utf-8',(err) =>{
  if (err)
  console.log(err);
  else {
      console.log('"Success! Your team profile has been generated"')
  }
})
};






