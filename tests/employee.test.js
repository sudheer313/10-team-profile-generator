const Employee = require("../lib/Employee");
const employee = new Employee("Sudheer", "007", "kandulasudheer445@gmail.com");
describe("EmloyeeClass", () => {
  it("should assert new employee object from constructor", () => {
    const employee = new Employee(
      "Sudheer",
      "007",
      "kandulasudheer445@gmail.com"
    );
    //assertions
    expect(employee.full_name).toEqual("Sudheer");
    expect(employee.company_id).toEqual("007");
    expect(employee.email_id).toEqual("kandulasudheer445@gmail.com");
  });
  it("employee getName should return name", () => {
    expect(employee.getName()).toEqual("Sudheer");
  });
  it("employee get ID should return ID", () => {
    expect(employee.getId()).toEqual("007");
  });
  it("employee get role should return role", () => {
    expect(employee.getRole()).toEqual("employee");
  });
});
