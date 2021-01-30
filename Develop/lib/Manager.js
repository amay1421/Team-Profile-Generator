const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;

    }
    getRole = () => "Manager";
    getOfficeNumber = () => "Office Number";

}

module.exports = Manager;