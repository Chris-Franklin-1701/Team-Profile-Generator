module.exports = [{
    message: "Please enter the team manager's employee id:",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's id:");
            return false;
        }else{
            return true;
        }
    },
},
{
    message: "Please enter the team manager's email:",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's email:");
            return false;
        }else{
            return true;
        }
    },
},
{
    message: "Please enter the team manager's office phone number:",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the team manager's office phone number:");
            return false;
        }else{
            return true;
        }
    },
},
{
    message: ""
}


]