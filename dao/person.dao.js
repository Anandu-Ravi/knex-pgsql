// dao=data acess object

const db = require("../db/db");

class PersonDAO {
  async CreatePerson(email,firstName,lastName) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");
    return id;
  }
}

module.exports = new PersonDAO();
