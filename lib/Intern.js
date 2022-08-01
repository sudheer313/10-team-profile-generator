const Employee=require("./Employee");

class Intern extends Employee{
    constructor(full_name, company_id, email_id,school){
        super(full_name, company_id, email_id);
        this.school=school;
    }
    //getter Methods
    getRole(){
        return "Intern";
            }
    getSchool(){
        return this.school;
    }
}

// Expoerting Intern Module
module.exports=Intern;