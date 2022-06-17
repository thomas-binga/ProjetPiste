import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    getUserById(numUtil) {
        return axios.get(USER_API_BASE_URL + '/' + numUtil);
    }

    createUser({utilisateur, missionIdList}) {
        return axios.post(USER_API_BASE_URL, {utilisateur, missionIdList});
    }

    deleteUser(numUtil) {
        return axios.post(USER_API_BASE_URL + '/delete/' + numUtil);
    }

}

export default new UserService();