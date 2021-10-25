const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


function generateTeam(){
    inquirer.prompt([{
        type: "input",
        message: "Please enter the team member's name.",
        name: "name"        
    },
    {
        type: "checkbox",
        message: "What is this team member's role?",
        name: "role",
        choices: ["Manger", "Engineer", "Intern"]
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
            message: `Please enter the team member's ${roleModifier}.`
        },
        {
            type: "checkbox",
            message: "Would you like to add another team member?",
            name: "additionalMember",
            choices: ["Yes", "No"]
        }])
        
        .then(function({roleModifier, additionalMember}) {
        let nextMember;
        if (role === "Engineer") {
            nextMember = new Engineer(name, id, email, roleModifier);
        }else if (role === "Intern") {
            nextMember = new Intern(name, id, email, roleModifier);
        }else{
            nextMember = new manager(name, id, email, roleModifier);
        }
        team.push(nextMember);
        addMemberHtml(nextMember)
        .then (function() {
            if (additionalMember === "yes") {
                generateTeam();
            }else{
                generateHtml();
            }
        });
        });
    });
};

module.exports = generateTeam;