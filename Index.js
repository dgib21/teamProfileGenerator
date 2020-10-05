
//  const OUTPUT_DIR = path.resolve(__dirname, "output")
//  const outputPath = path.join(OUTPUT_DIR, "team.html");

// Required libraries
const Employee = require("./lib/Employee");
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//setting team arry to store employees
const teamArray = [];

//FS to write the html file
const fs = require("fs");

//html template to dynmaically render the page
const generateHTMLPage = require("./src/pageTemplate.js");


//create manager function 
const createManager = () => {

    inquirer.prompt([{
                type: 'input',
                name: 'managerName',
                message: "Enter Manager name: ",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Enter ManagerId: ",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Enter Manager Email: ",
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Enter Manager Office Number: ",
            },
        ])
        //making one big object of user responses 
        .then(userResponse => {
            const manager = new Manager(
                userResponse.managerName,
                userResponse.managerId,
                userResponse.managerEmail,
                userResponse.managerOfficenNumber)
            //pushing the manager object to an array 
            teamArray.push(manager);
            createTeam(); 
        })
};

//create engineer function to get user input and push to an array 
const createEngineer = () => {

        inquirer.prompt([{
                    type: 'input',
                    name: 'engineerName',
                    message: "Enter Engineer name: ",
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "Enter Engineer Id: ",
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "Enter Engineer Email: ",
                },
                {
                    type: 'input',
                    name: 'engineerGitHub',
                    message: "Enter Github ID: ",
                },
            ])
            //making one big object of user responses 
            .then(userResponse => {
                const engineer = new Engineer(
                    userResponse.engineerName,
                    userResponse.engineerId,
                    userResponse.engineerEmail,
                    userResponse.engineerGitHub)
                //pushing the manager object to an array 
                teamArray.push(engineer);
                createTeam();
            })
};
        //create engineer function to get user input and push to an array 
        const createIntern = () => {

            inquirer.prompt([{
                        type: 'input',
                        name: 'internName',
                        message: "Enter Intern name: ",
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: "Enter Intern Id: ",
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: "Enter Intern Email: ",
                    },
                    {
                        type: 'input',
                        name: 'internschool',
                        message: "Enter School: ",
                    },
                ])
                //making one big object of user responses 
                .then(userResponse => {
                    const intern = new Intern(
                        userResponse.internName,
                        userResponse.internId,
                        userResponse.internEmail,
                        userResponse.internschool)
                    //pushing the manager object to an array 
                    teamArray.push(intern);
                    createTeam();
                })
        };

        //create team function 
        const createTeam = () => {
            inquirer.prompt({
                type: 'list',
                name: 'userChoice',
                message: "What type of employee would you like to add: ",
                choices: [ "Intern", "Engineer", "I don't want to add anymore"]
            })
            .then(userResponse => {
                switch(userResponse.userChoice) {
                    case "Intern": 
                     createIntern(); 
                     break; 
                     case "Engineer": 
                     createEngineer(); 
                     break;
                     default: 
                     buildTeam(); 

                }
                    

            })

        }

       const buildTeam = () => {
        
        fs.mkdirSync(OUTPUT_DIR)
        fs.writeFileSync(outputPath, generatePage(teamArray), "utf-8");


       }





        createManager();