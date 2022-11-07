import axios from "axios";
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL + "/api/v1/pack/";

class PackageService {
    save(messengerName, typePack, observation,personDTO) {
        return axios
            .post(API_URL, {
                messengerName,
                typePack,
                observation,
                personDTO
            }, { headers: authHeader() })
    }
    getAll() {
        return axios.get(API_URL, { headers: authHeader() })
    }
}

export default new PackageService();