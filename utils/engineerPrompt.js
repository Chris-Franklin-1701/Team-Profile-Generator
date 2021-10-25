module.exports = [{
    type: "input",
    message: "Please enter the engineer's name.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the engineer's name.");
            return false;
        }else{
            return true;
        }
    },
    name: "engineer name"
},
{
    type: "input",
    message: "Please enter the engineer's employee id number.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the engineer's employee id number.");
            return false;
        }else{
            return true;
        }
    },
    name: "Engineer id"
},
{
    type: "input",
    message: "Please enter the engineer's email address.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the engineer's email address.");
            return false;
        }else{
            return true;
        }
    },
    name: "engineer email"
},
{
    type: "input",
    message: "Please enter the engineer's github username.",
    validate: (answer) => {
        if (isNaN(answer)) {
            console.log("Please enter the engineer's github username.");
            return false;
        }else{
            return true;
        }
    },
    name: "engineer username"
}];