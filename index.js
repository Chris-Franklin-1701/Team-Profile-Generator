const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const generateTeam = require("./utils/generateTeam");
const baseHTML = require("./utils/baseHTML");





function init() {
    baseHTML();
    generateTeam();
    
}



init();