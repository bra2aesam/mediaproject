import axios from 'axios';

const USER_API_URL = "http://localhost/mediasocial/backend/groupcrud";

class GroupService {

    createGroup(group){
        return axios.post(`${USER_API_URL}/create.php`, group);
    }
    
    updateGroup(group){
        return axios.post(`${USER_API_URL}/update.php`, group);
    }

}

export default new GroupService()