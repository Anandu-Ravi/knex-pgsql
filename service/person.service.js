const personDAO = require('../dao/person.dao')

class PersonService{
    CreatePerson(personDto){
        const {email,firstName,lastName}= personDto;
        return personDAO.CreatePerson(email,firstName,lastName)
    }
}

module.exports = new PersonService();