import axios from "axios";
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL + "/api/v1/request/";

class PqrsService {
    save(titleRequest, descriptionRequest, responseRequest, statusRequest, typeRequest) {
        return axios
            .post(API_URL, {
                titleRequest,
                descriptionRequest,
                responseRequest,
                statusRequest,
                typeRequest
            }, { headers: authHeader() })
    }

    update(requestId, titleRequest, descriptionRequest, responseRequest, statusRequest, typeRequest) {
        return axios
            .put(API_URL + requestId, {
                titleRequest,
                descriptionRequest,
                responseRequest,
                statusRequest,
                typeRequest
            }, { headers: authHeader() })
    }

    getAll() {
        return axios.get(API_URL, { headers: authHeader() })
    }

    getMyPQRSs() {
        return axios.get(API_URL, { headers: authHeader() })
    }
}

export default new PqrsService();
