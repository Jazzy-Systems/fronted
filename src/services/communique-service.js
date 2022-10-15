import axios from "axios";
import authHeader from './auth-header';
const API_URL = "http://localhost:8081/api/v1/communique";

class CommuniqueService {
    save(titleCommunique,description,typeName) {
        return axios
            .post(API_URL, {
                titleCommunique,
                description,
                typeName
            }, { headers: authHeader()})
    }
    getAll() {
        return axios.get(API_URL, { headers: authHeader() })
    }
}

export default new CommuniqueService();

