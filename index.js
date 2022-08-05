
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHtml = require("./src/generateHtml.js");
const empArray=[];
const Manager_questions = async () => {
  const managerDetails = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name?(*)",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter  employee ID(*)?",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter  email address(*)?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter  office number(*)?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Who would you like to add next?",
      choices: ['Engineer', 'Intern', 'BuildTeam'],
    }
  ]);
  const { name, id, email, officeNumber } = managerDetails;
  const manager = new Manager(name, id, email, officeNumber);
  empArray.push(manager);
}

const Engineer_questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name?(*)",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter  employee ID(*)?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "Please enter  email address(*)?",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter github username(*)?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Who would you like to add next?",
      choices: ['Engineer','Intern','BuildTeam'],
    }
  ]);
};

const intern_questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name?(*)",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter  employee ID(*)?",
    },
    {
      type: "input",
      name: "emailaddress",
      message: "Please enter  email address(*)?",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter your school name(*)?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Who would you like to add next?",
      choices: ['Engineer','Intern','BuildTeam'],
    }
   
  ]);
};

// Bonus using writeFileSync as a promise
const init = () => {
  Manager_questions()
  //Engineer_questions()
  //intern_questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => 
    fs.writeFileSync('index.html', generateHTML(answers)))
    
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

const generateHTML = () =>
//console.log(name, location, github, linkedin);
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
</head>
<body>
<nav class="navbar navbar-dark justify-content-center align-items-center">
<span class="navbar-brand mb-0 h1">
      <h1>My Team Profile</h1>
  </span>
</nav>
<div class ="card-container">

<div class="card mb-3" style="max-width: 18rem;">
  <div class="card-header"><h3>dgvs</h3><i class="fa-solid fa-mug-hot"></i> Manager
  </div>
  <div class="card-body text-dark">
    <h5 class="card-title">${Manager.name}</h5>
    <p class="card-text"></p>
    <ul class="list-group">
      <li class="list-group-item">Company_Id: ${Manager.id}</li>
      <li class="list-group-item">Email: <a href = "mailto:e-mail">${Manager.email}</a></li>
      <li class="list-group-item">Office_number: ${Manager.officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

//referred from https://github.com/ashachakre0906 bootstrap module
//ask BCS

