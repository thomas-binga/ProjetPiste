import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser({utilisateur, missionIdList}) {
        return axios.post(USER_API_BASE_URL, {utilisateur, missionIdList});
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

}

export default new UserService();