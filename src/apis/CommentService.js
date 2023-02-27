import axios from 'axios';

const API_URL = "http://localhost/mediasocial/backend/comment";


class CommentService {

    getComment(){
        return axios.get(`${API_URL}/read.php`);
    }

    createComment(comment){
        return axios.comment(`${API_URL}/create.php`, comment);
    }
  

  

    updateComment(comment){
        return axios.comment(`${API_URL}/update.php`, comment);

    }
  

    deleteComment(id){
        return axios.delete(`${API_URL}/delete.php`, 
                                    { params: { id: id } });
    }
}

export default new CommentService()