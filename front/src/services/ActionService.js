import axios from 'axios';

const ACTION_API_BASE_URL = "http://localhost:8080/api/actions";

class ActionService {

        getActions({user, mission}){
            if (user) {
                return axios.get(ACTION_API_BASE_URL + '/byUser' + user.id);
            }
            else if (mission) {
                return axios.get(ACTION_API_BASE_URL + '/byMissionId' + mission.id);
            }
            return axios.get(ACTION_API_BASE_URL);
        }

}

export default new ActionService();