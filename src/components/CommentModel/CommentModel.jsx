import { Modal, useMantineTheme } from "@mantine/core";
import { useRef, useState } from "react";
import PostService from "../../apis/PostService";
// import GroupService from "../../../apis/GroupService";
import ProfileImage from "../../img/profileImg.jpg";
import "./CommentModel.css"

function PostModal({ modalOpened, setModalOpened, post }) {
  const theme = useMantineTheme();
  console.log(post);
  const imageRef = useRef();

  const [postData, setPostData] = useState({
    myImage: "",
    body: "",
    user_id: 1,
    group_id: 0,
    id: post.id,
  });
  const handleChange = (e) => {
    const newData = { ...postData };
    newData[e.target.name] = e.target.value;
    setPostData(newData);
    console.log(newData);
  };
  const handleImage = (event) => {
    const newData = { ...postData };
    newData[event.target.name] = event.target.files[0];
    setPostData(newData);
    console.log(newData);
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", postData.id);
    formData.append("post_img", postData.myImage);
    formData.append("body", postData.body);
    formData.append("user_id", postData.user_id);
    formData.append("group_id", postData.group_id);

    console.log(formData.get("post_img"));
    console.log(formData.get("body"));
    console.log(formData.get("user_id"));
    console.log(formData.get("group_id"));
    PostService.updatePost(formData).then(function (res) {
      console.log(res);
    });
    console.log(postData);
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
      <div className="showComments">
        <h1>Comments</h1>
        <div className="PostShare">
          <img src={ProfileImage} alt="" />
          <div />
          <div className="viewsec">
            <b style={{fontSize:'20px'}}>{post.user_name}</b>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel, quo placeat nisi optio tenetur quod recusandae beatae, ratione perspiciatis cupiditate pariatur, rem voluptate laboriosam non totam delectus atque sapiente eos aspernatur? Voluptatem placeat debitis quasi fugiat? Soluta porro inventore corrupti voluptatem sapiente odit, quis illum fuga nam ullam nobis? 
            </p>
          </div>
        </div>
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
                name="body"
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

export default PostModal;
