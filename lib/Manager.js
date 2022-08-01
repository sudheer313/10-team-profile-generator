const Employee = require("./Employee");

class Manager extends Employee {
  constructor(full_name, company_id, email_id) {
    super(full_name, company_id, email_id, office_Number);
    this.office_Number = this.office_Number;
  }
  //Getter Methods
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.office_Number;
  }
}

//exporting Module
module.exports = Manager;
