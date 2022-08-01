const Employee =require("./Employee");

class Engineer extends Employee{
    constructor(full_name, company_id, email_id,git_hub){
        super(full_name, company_id, email_id);
        this.git_hub=git_hub;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.git_hub;
    }
}
//Exporting Engineer Module
module.exports=Engineer;