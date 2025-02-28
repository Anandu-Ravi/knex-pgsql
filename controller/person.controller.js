const personService = require("../service/person.service");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.CreatePerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json('Something went wrong!')
    }
  }
}

module.exports = new PersonController();
