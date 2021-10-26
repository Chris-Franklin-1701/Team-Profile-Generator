const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHtml = require("./generateHtml");


const team = [];



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

module.exports = generateTeam;