
function generateHtml(empArray){
    for(i=0;i<empArray.length; i++){
        if(empArray[i].getRole()=="Manager"){
            let str= ` <div class="card mb-3" style="max-width: 16rem;">
            <div class="card-header"><h3>${empArray[i].getName()}</h3><i class="fa-solid fa-mug-hot"></i> Manager
            </div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id: ${empArray[i].getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${empArray[i].getEmail()}">${empArray[i].getEmail()}</a></li>
                <li class="list-group-item">Office number: ${empArray[i].getOfficeNumber()}</li>
              </ul>
            </div>
         </div>

            `;
           profileCards += str;
    } else if (empArray[i].getRole() == "Engineer") {
      let str = `
        <div class="card mb-3" style="max-width: 16rem;">
            <div class="card-header"><h3>${empArray[i].getName()}</h3><i class="fa-solid fa-glasses"></i> Engineer</div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id: ${empArray[i].getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${empArray[i].getEmail()}">${empArray[i].getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href = "https://github.com/${empArray[i].getGithub()}">${empArray[i].getGithub()}</a></li>
              </ul>
            </div>
        </div>
      `;
      profileCards += str;
    } else if (empArray[i].getRole() == "Intern") {
      let str = `
        <div class="card mb-3" style="max-width: 16rem;">
          <div class="card-header"><h3>${empArray[i].getName()}</h3><i class="fa-solid fa-user-graduate"></i> Intern</div>
            <div class="card-body text-dark">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <ul class="list-group">
                <li class="list-group-item">id: ${empArray[i].getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${empArray[i].getEmail()}">${empArray[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${empArray[i].getSchool()}</li>
              </ul>
          </div>
        </div>
     `;
     profileCards += str;
    }
  }
  return profileCards;
}

let profileCards="";
console.log(profileCards);

module.exports=(empArray) => {
    return `
   
        <!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
              <link rel ="stylesheet" href = "assets/css/style.css">
              
              <title>Team Profile Generator</title>
          </head>
          <body>
              <nav class="navbar navbar-dark justify-content-center align-items-center">
                <span class="navbar mb-0 h1">
                      <h1>My Team</h1>
                  </span>
              </nav>
            <div class ="card-container">
              ${generateHtml(empArray)}
            </div>       
          </body>
        </html>
          `;

    
};
//https://www.npmjs.com/package/inquirer
// referred jessamyn27/Team-Profile-Generator-JS-Node-Jest
//ask BCS
// referred ashachakre0906/team-Profile-Generator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules        