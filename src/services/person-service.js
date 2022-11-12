import axios from "axios";
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL + "/api/v1/person/";

class PersonService {

    findByDni(dni) {
        return axios.get(API_URL + "dni/" + dni, { headers: authHeader() })
    }

    findByApartment(id){
        return axios.get(API_URL + "apart/" + id, { headers: authHeader() })
    }

    findByProfile(){
        return axios.get(API_URL + "myprofile/" , { headers: authHeader() })
    }

    updatePhone(phonee){
        let personId = "";
        let firstName = "";
        let lastName = "";
        let phone = phonee;
        let dni = "";
        let email = "";
        return axios.put(API_URL + "update", {
            personId,
            firstName,
            lastName,
            phone,
            email,
            dni
        }, { headers: authHeader() })

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
