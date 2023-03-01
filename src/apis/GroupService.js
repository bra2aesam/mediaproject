import axios from 'axios';

const USER_API_URL = "http://localhost/mediaproject/backend/groupcrud";

class GroupService {
   
    getSingleGroup(group){
        return axios.post(`http://localhost/mediaproject/backend/group/index.php`, group);
    }
    createGroup(group){
        return axios.post(`${USER_API_URL}/create.php`, group);
    }
    updateGroup(group){
        return axios.post(`${USER_API_URL}/update.php`, group);
    }
    sendRequest(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/group/sendRequest.php`, sendRequest);
    }
    acceptRequest(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/group/acceptRequest.php`, sendRequest);
    }
    rejectRequest(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/group/rejectRequest.php`, sendRequest);
    }

}

export default new GroupService()