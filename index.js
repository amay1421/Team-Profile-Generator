const fs = require("fs");
const inquirer = require("inquirer");


//Ask Questions for employee > .then >> create Employee object >> 
            //type of employee :
            // if manager >> create Manager Object
            // else >> intern >> create Intern Object

//write file with objects you created.

getEmployeeInformation () {
  
    let employeeInformation =
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
                name: "title",
                message: "Please enter a title:"
             }
    ]);

}