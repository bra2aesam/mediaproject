import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import PostService from "../../apis/PostService";
import { useLocation } from "react-router-dom";


const PostShare = ({setAny, setGroupRender}) => {
  const [image, setImage] = useState(null);
  const location = useLocation()

  const imageRef = useRef();
  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user.id)

  const [postData, setPostData] = useState({
    myImage:"",
    body:"",
    user_id:user.id,
    group_id:0,
  });
  const handleChange = (e)=>{
    const newData = { ...postData }
    newData[e.target.name] = e.target.value
    setPostData(newData)
    console.log(newData)
  }

  const onImageChange = (event) => {
    const newData = { ...postData }
    newData[event.target.name] = event.target.files[0]
    setPostData(newData)
    console.log(newData)
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  const handelClick = () => {
    const formData = new FormData()
    formData.append('post_img', postData.myImage)
    formData.append('body', postData.body)
    formData.append('user_id', postData.user_id)
    formData.append('group_id', postData.group_id)
    
    console.log(formData.get('post_img'))
    console.log(formData.get('body'))
    console.log(formData.get('user_id'))
    console.log(formData.get('group_id'))
    PostService.createPost(formData).then(function(res){
      console.log(res)
      // setAny(true)
      setGroupRender({state: 'create'})
      if(location.pathname == '/'){
        console.log('home')
        // setAny(true)
      }
      else if (location.pathname == 'group') {
        // setReRender({state: 'dislike'})
        setGroupRender({state: 'create group'})
      } else {
        setAny(true)
        console.log('profile')
      }
      }) 
    console.log(postData)
    }

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <div className="postOptions">
        <input type="text" name="body" onChange={handleChange} placeholder="What's happening" className="div"/>
          <span className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </span>

          <button className="button ps-button" onClick={handelClick}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>


      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
