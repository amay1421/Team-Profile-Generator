const fs = require("fs");
const inquirer = require("inquirer");
const html = require('./src/page-template')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')



//Ask Questions for employee > .then >> create Employee object >> 
            //type of employee :
            // if manager >> create Manager Object
            // else >> intern >> create Intern Object

//write file with objects you created.

const getEngineerInformation = () => {
  
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Please enter an ID:"
             },
            {
                type: "input",
                name: "name",
                message: "Please enter a name:"
             },
             {
                type: "input",
                name: "email",
                message: "Please enter an email:"
             },
             {
                 type: "input",
                name: "github",
                message: "Please enter a github username:"
             }
    ]).then((answers) => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

        employeeType();
    })

}

const getManagerInformation = () => {
  
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Please enter an ID:"
             },
            {
                type: "input",
                name: "name",
                message: "Please enter a name:"
             },
             {
                type: "input",
                name: "email",
                message: "Please enter an email:"
             },
             {
                 type: "input",
                name: "officeNumber",
                message: "Please enter an office number:"
             }
    ]).then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

        employeeType();
    })

}

const getInternInformation = () => {
  
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Please enter an ID:"
             },
            {
                type: "input",
                name: "name",
                message: "Please enter a name:"
             },
             {
                type: "input",
                name: "email",
                message: "Please enter an email:"
             },
             {
                 type: "input",
                name: "school",
                message: "Please enter a school:"
             }
    ]).then((answers) => {
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)

        employeeType();
    })

}

const employeeType = () => {
  
    inquirer
        .prompt([
            {
             type: "list",
               name: "employeeType",
               message: "Please enter which employee type:",
               choices: ["Manager", "Engineer", "Intern", "Exit"]
            }
        ]) .then((answer) => {

            switch (answer.employeeType) {
                case "Engineer" : getEngineerInformation () 
                break;
                case "Intern" : getInternInformation () 
                break;
                case "Manager" : getManagerInformation () 
                break
                case "Exit" : generateTeam ()
            }
    
        })
    };


    employeeType();
 
    // inquirer.prompt(getEngineerInformation).then((answers)) => {
    //     fs.writeFileSync('./Output/page-template.js',generateTeam(answers))
    // }

    var team = [getEngineerInformation, getInternInformation, getManagerInformation]

/////////

// const newEmployee = new Employee("John", 5, "john@gmail.com");

// const newEngineer = new Engineer("John", 5, "john@john.com", "john20")


// console.log(newEngineer.getRole())
