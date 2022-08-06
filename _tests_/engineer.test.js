const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Sachin", "010", "sachin@gmail.com","sudheer313");
describe("EngineerClass", () => {
  it("should assert new engineer object from constructor", () => {
    const engineer = new Engineer(
      "Sachin",
      "010",
      "sachin@gmail.com",
      "sudheer313"
    );
    //assertions
    expect(engineer.full_name).toEqual("Sachin");
    expect(engineer.company_id).toEqual("010");
    expect(engineer.email_id).toEqual("sachin@gmail.com");
  });
  it("engineer getName should return name", () => {
    expect(engineer.getName()).toEqual("Sachin");
  });
  it("engineer get ID should return ID", () => {
    expect(engineer.getId()).toEqual("010");
  });
  it("engineer getGithub()method should return github ID", () =>{
    expect(engineer.getGithub()).toEqual("sudheer313");

  })
  it("engineer get role should return role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});