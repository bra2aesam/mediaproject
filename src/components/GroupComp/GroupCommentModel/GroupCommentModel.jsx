import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import CommentService from "../../../apis/CommentService";
// import PostService from "../../apis/PostService";
// import GroupService from "../../../apis/GroupService";
import ProfileImage from "../../../img/profileImg.jpg";
import "./GroupCommentModel.css"

function GroupCommentModel({ modalOpened, setModalOpened, post }) {
  // console.log(post)
  const theme = useMantineTheme();
  const user = JSON.parse(localStorage.getItem("user"))
  const [comment, setComment] = useState([])
  // console.log(comment);
  const imageRef = useRef();
  useEffect(()=>{
    const formData = new FormData();
    formData.append("limit", 1);
    formData.append("post_id", post.id);
    // console.log(formData.get('limit'))
    // console.log(formData.get('post_id'))
    CommentService.getComment(formData).then(function(res){
      // console.log(res)
      setComment(res.data)
      }) 
  },[])
  const [commentData, setcommentData] = useState({
    user_id: user.id,
    comment_body: '',
    id: post.id,
  });
  const handleChange = (e) => {
    const newData = { ...commentData };
    newData[e.target.name] = e.target.value;
    setcommentData(newData);
    console.log(newData);
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post_id", post.id);
    formData.append("comment_body", commentData.comment_body);
    formData.append("user_id", commentData.user_id);

    console.log(formData.get("comment_body"));
    console.log(formData.get("user_id"));
    console.log(formData.get("post_id"));
    CommentService.createComment(formData).then(function (res) {
      console.log(res);
      const fData = new FormData();
    fData.append("limit", 1);
    fData.append("post_id", post.id);
    // console.log(formData.get('limit'))
    // console.log(formData.get('post_id'))
    CommentService.getComment(fData).then(function(res){
      // console.log(res)
      setComment(res.data)
      }) 
    console.log(commentData);
    });
    
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="showComments" style={{margin:'0 auto', textAlign:'center'}}>
        <h1 style={{margin:'0 auto', textAlign:'center'}} className="Comm">Comments</h1>
        <hr />
        {comment.map(c =>{
          return <div key={c.id} className="PostShare">
                    <img src={ProfileImage} alt="" />
                    <div />
                    <div className="viewsec">
                      <b style={{fontSize:'20px'}}>{c.user_name}</b>
                      <p>
                        {c.comment_body}
                      </p>
                    </div>
                  </div>
        })}
      </div>
      <hr />
      <form onSubmit={handelsubmit} className="infoForm">
        {/* ============= */}
        <div className="PostShare">
          <img src={ProfileImage} alt="" />
          <div>
            <div className="postOptions">
              <input
                type="text"
                name="comment_body"
                onChange={handleChange}
                placeholder="Write a comment ...."
                className="div"
              />
              <span
                className="option"
                style={{ color: "var(--photo)" }}
                onClick={() => imageRef.current.click()}
              ></span>

              {/* <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div> */}
            </div>

            {/* {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )} */}
          </div>
        </div>

        {/* <div>

            Cover Image
            <input type="file" name="myImage"  onChange={handleImage}/>
        </div> */}

        <button type="submit" className="button infoButton">
          Post
        </button>
      </form>
    </Modal>
  );
}

export default GroupCommentModel;
