const inquirer = require("inquirer");
const fs = require(fs);





function init() {
    inquirer.prompt(addTeamMember).then((answers) => {
        //console.log(answers);
        team.push(answers);
        console.log(team);
        addTeamMember();
    });
}


init();