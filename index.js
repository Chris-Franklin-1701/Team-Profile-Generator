const inquirer = require("inquirer");
const fs = require("fs");
//const generateTeam = require("./utils/generateTeam");
//const baseHTML = require("./utils/baseHTML");
//const generateHTML = require("./utils/generateHTML");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];
    //console.log(team);




function init() {
    baseHTML();
    generateTeam();
    
}



function generateTeam(){
    inquirer.prompt([{
        type: "input",
        message: "Please enter the team member's name.",
        name: "name"        
    },
    {
        type: "list",
        message: "What is this team member's role?",
        choices: ["Manger", "Engineer", "Intern"],
        name: "role"
    },
    {
        type: "input",
        message: "Please enter the team member's employee id.",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter the team member's email address.",
        name: "email"
    }])

    .then(function({name,role,id,email}){
        let roleModifier = "";
        if (role === "Engineer") {
            roleModifier = "GitHub username";
        }else if (role === "Intern") {
            roleModifier = "school's name";
        }else{
            roleModifier = "office phone number"
        }
        inquirer.prompt([{
            type: "input",
            message: `Please enter the team member's ${roleModifier}.`,
            name: "modifier"
        },
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
            name: "addMember"
        }])
        
        .then(function({modifier, addMember}) {
            let currentMember;
            if (role === "Engineer") {
            currentMember = new Engineer(name, id, email, modifier);
            }else if (role === "Intern") {
            currentMember = new Intern(name, id, email, modifier);
            }else{
            currentMember = new Manager(name, id, email, modifier);
            }
            team.push(currentMember);
            addMemberHtml(currentMember)
            .then (function() {
                if (addMember === "Yes") {
                    generateTeam();
                }else{
                    generateHtml();
                }
            });
        });
    });
}

function baseHTML() {
    const base = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
        <title>Your Starfleet Travel Team!!!</title>
    </head>
    <body>
        <div class="bg-primary p-5 rounded-3 lg m-3 text-light">
            <h1 class="display-4">Starfleet Travel</h1>
            <p class="lead">Thank you for choosing Starfleet Travel for your flight today.  Your destination is our vocation.</p>
            <hr class="my-4">
            <p> Your flight team today consists of:</p>
        </div>
        <div class="container bg-success rounded-3">
            <div class="row justify-content-around">`;
    
    
        fs.writeFile("./output/team.html", base, function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("begin");
}

function addMemberHtml(nextMember) {
    return new Promise (function(resolve,reject) {
        const name = nextMember.getName();
        const role = nextMember.getRole();
        const id = nextMember.getId();
        const email = nextMember.getEmail();
        let column = "";
        if (role === "Engineer") {
            const github = nextMember.getGithub();
            column = `<div class="col-3 rounded-3 bg-warning text-dark">
            <h2>Engineer:</h2>
            <p>Name: ${name}</p>
            <p>Employee ID: ${id}</p>
            <p>Email Address: ${email}</p>
            <p>GitHub Username: ${github}</p>
        </div>`
        }else if (role === "Intern") {
            const school = nextMember.getSchool();
            column = `<div class="col-3 rounded-3 bg-danger text-dark">
            <h2>Intern:</h2>
            <p>Name: ${name}</p>
            <p>Employee ID: ${id}</p>
            <p>Email Address: ${email}</p>
            <p>School Name: ${school}</p>
        </div>`
        }else{
            const officeNumber = nextMember.getOfficeNumber();
            column = `<div class="col-3 rounded-3 bg-info text-dark">
            <h2>Team Manager:</h2>
            <p>Name: ${name}</p>
            <p>Employee ID: ${id}</p>
            <p>Email Address: ${email}</p>
            <p>Office Phone Number: ${officeNumber}</p>
        </div>`
        }
        console.log("added team member");

            fs.appendFile("./output/team.html", column, function (err) {
                if (err) {
                    return reject(err);
                };
                return resolve();
            });
    });


}


function generateHtml() {
    const base = `</div>
    </div>
</body>
</html>`;

    
    fs.appendFile("./output/team.html", base, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("You have finished setting up your Team Profile!!!");
}



init();