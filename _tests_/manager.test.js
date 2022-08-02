const Manager = require("../lib/Manager");
const manager = new Manager("Ganguly", "008", "ganguly@gmail.com","0401234");
describe("ManagerClass", () => {
  it("should assert new manager object from constructor", () => {
    const manager = new Manager(
      "Ganguly",
      "008",
      "ganguly@gmail.com",
      "0401234"
    );
    //assertions
    expect(manager.full_name).toEqual("Ganguly");
    expect(manager.company_id).toEqual("008");
    expect(manager.email_id).toEqual("ganguly@gmail.com");
    expect(manager.office_Number).toEqual("0401234");
  });
  it("manager getName should return name", () => {
    expect(manager.getName()).toEqual("Ganguly");
  });
  it("manager get ID should return ID", () => {
    expect(manager.getId()).toEqual("008");
  });
  it("manager getgetofficeNumber() should return office number",() =>{
    expect(manager.getOfficeNumber()).toEqual("0401234");
  });
  it("manager get role should return role", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});