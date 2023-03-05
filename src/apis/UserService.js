import axios from 'axios';

const USER_API_URL = "http://localhost/mediaproject/backend/user";


class UserService {

    getUsers(){
        return axios.get(`${USER_API_URL}/read.php`);
    }
    suggGroup(user){
        return axios.post(`http://localhost/mediaproject/backend/group/suggGroup.php`, user);
    }
    getUserData(user){
        return axios.post(`http://localhost/mediaproject/backend/feed/index.php`, user);
    }
    sendRequest(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/profile/sendRequest.php`, sendRequest);
    }
    acceptRequest(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/profile/acceptRequest.php`, sendRequest);
    }
    cancelRequest(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/profile/cancelRequest.php`, sendRequest);
    }
    hitLike(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/like/create.php`, sendRequest);
    }
    hitDislike(sendRequest){
        return axios.post(`http://localhost/mediaproject/backend/like/cancel.php`, sendRequest);
    }
    getUserDataTimeline(user){
        return axios.post(`http://localhost/mediaproject/backend/profile/timeline.php`, user);
    }
    
    createUser(user){
        return axios.post(`${USER_API_URL}/create.php`, user);
    }

    getUserById(id){
        return axios.get(`${USER_API_URL}/single_user.php`, 
            { params: { id: id } });
    }
    finduser(user){
        return axios.post(`${USER_API_URL}/finduser.php`, user);
    }

    updateUser(user){
        return axios.post(`${USER_API_URL}/update.php`, user);
   
    }
  

    // deleteUser(id){
    //     return axios.delete(`${USER_API_URL}/delete.php`, 
    //                                 { params: { id: id } });
    // }
}

export default new UserService()