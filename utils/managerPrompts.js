module.exports = [{
    type: "input",
    message: "Please enter the team manager's name.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's name.");
            return false;
        }else{
            return true;
        }
    },
    name: "manager name"
},
{
    type: "input",
    message: "Please enter the team manager's employee id number.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's employee id number.");
            return false;
        }else{
            return true;
        }
    },
    name: "manager id"
},
{
    type: "input",
    message: "Please enter the team manager's email address.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's email address.");
            return false;
        }else{
            return true;
        }
    },
    name: "manager email"
},
{
    type: "input",
    message: "Please enter the team manager's office phone number.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's office phone number.");
            return false;
        }else{
            return true;
        }
    },
    name: "manager number"
}];