import axios from 'axios';

const ACTION_API_BASE_URL = "http://localhost:8080/api/actions";

class ActionService {

    getActions({userId, missionId}) {
        if (userId) {
            return axios.get(ACTION_API_BASE_URL + '/byUserId/' + userId);
        }
        else if (missionId) {
            return axios.get(ACTION_API_BASE_URL + '/byMissionId/' + missionId);
        }
        return axios.get(ACTION_API_BASE_URL);
    }

    doAction({userId, actionId}) {
        return axios.post(ACTION_API_BASE_URL + '/do/' + userId + '/' + actionId);
    }

}

export default new ActionService();