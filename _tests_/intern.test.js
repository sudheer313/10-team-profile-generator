const Intern = require("../lib/Intern");
const intern = new Intern("Schewag", "006", "Schewag@gmail.com","victoria");
describe("InternClass", () => {
  it("should assert new intern object from constructor", () => {
    const intern = new Intern(
      "Schewag",
      "006",
      "Schewag@gmail.com",
      "victoria"
    );
    //assertions
    expect(intern.full_name).toEqual("Schewag");
    expect(intern.company_id).toEqual("006");
    expect(intern.email_id).toEqual("Schewag@gmail.com");
    expect(intern.school).toEqual("victoria")
  });
  it("intern getName should return name", () => {
    expect(intern.getName()).toEqual("Schewag");
  });
  it("intern get ID should return company ID", () => {
    expect(intern.getId()).toEqual("006");
  });
  it("intern get e-mail should return e-mail", () => {
    expect(intern.getEmail()).toEqual("Schewag@gmail.com");
  });
  it("intern getSchool should return role", () => {
    expect(intern.getSchool()).toEqual("victoria");
  });
  it("intern get role should return role", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});