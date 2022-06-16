import axios from 'axios';

const ACTION_API_BASE_URL = "http://localhost:8080/api/missions";

class MissionService {

    getMissions(){
        return axios.get(ACTION_API_BASE_URL);
    }

}

export default new MissionService();