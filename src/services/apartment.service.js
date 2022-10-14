import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8081/api/v1/apartment/";

class AparmentService {

    save(buildingName, apartmentNumber) {
        return axios.post(API_URL, { buildingName, apartmentNumber }, { headers: authHeader() })

    }

    getAll() {
        return axios.get(API_URL, { headers: authHeader() })
    }

    getById(Id) {
        return axios.get(API_URL + Id, { headers: authHeader() })
    }
}

export default new AparmentService();
