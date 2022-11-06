import axios from "axios";
import authHeader from './auth-header';
const API_URL = "http://localhost:8081/api/v1/person/";

class PersonService {

    findByDni(dni) {
        return axios.get(API_URL + "dni/" + dni, { headers: authHeader() })
    }

    findByApartment(id){
        return axios.get(API_URL + "apart/" + id, { headers: authHeader() })
    }

    update(person) {
        let personId = person.personId;
        let firstName = person.firstName;
        let lastName = person.lastName;
        let phone = person.phone;
        let dni = person.dni;
        let email = person.email;
        return axios.put(API_URL + personId, {
            personId,
            firstName,
            lastName,
            phone,
            email,
            dni
        }, { headers: authHeader() })
    }
    getAll() {
        return axios.get(API_URL, { headers: authHeader() })
    }
}

export default new PersonService();
