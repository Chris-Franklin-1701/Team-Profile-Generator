const inquirer = require("inquirer");
const fs = require(fs);





function init() {
    inquirer.prompt(managerPrompt).then((answers) => {
        //console.log(answers);
        team.push(answers);
        console.log(team);
        addTeamMember();
    });
}


init();