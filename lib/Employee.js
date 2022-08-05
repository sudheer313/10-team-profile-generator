class Employee{
    constructor(full_name, company_id, email_id){
        this.full_name=full_name;
        this.company_id=company_id;
        this.email_id=email_id;
    }

    //Getter Methods to return information about class
    getName(){
        return this.full_name;
    }

     getId(){
        return this.company_id;
     }
     getEmail(){
        return this.email_id;
     }

     getRole(){
        return "employee";
     }
}

//exporting Employee Module
module.exports=Employee;