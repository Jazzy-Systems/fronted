import axios from "axios";
import authHeader from './auth-header';
const API_URL = "http://localhost:8081/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "signin", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    signUp(email, password, roleName, code) {
        return axios.post(API_URL + "signup", {
            email,
            password,
            roleName,
            code
        });
    }

    registerPerson(personDTO, roleName, apartmentDTO, companyName) {
        return axios.post(API_URL + "registerPerson", {
            personDTO,
            roleName,
            apartmentDTO,
            companyName
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

    changePassword(email, currentPassword, newPassword) {
        return axios.put(API_URL + "changepassword", {
            email,
            currentPassword,
            newPassword
        }, { headers: authHeader() });
    }

    recoverPassword(email, currentPassword, newPassword) {
        return axios.put(API_URL + "recover", {
            email,
            currentPassword,
            newPassword
        }, { headers: authHeader() });
    }

    requestRecoveryPassword(email) {
        let currentPassword = null;
        let newPassword = null;
        return axios.post(API_URL + "recover", {
            email,
            currentPassword,
            newPassword
        });
    }
}

export default new AuthService();
