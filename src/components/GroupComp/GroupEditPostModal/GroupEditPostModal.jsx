import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../../apis/PostService";
// import PostService from "../../apis/PostService";
// import GroupService from "../../../apis/GroupService";


function GroupEditPostModal({ modalOpened, setModalOpened,post , setGroupRender}) {
  const theme = useMantineTheme();
  // console.log(post)
  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user.id)
  const param = useParams()
  const [postData, setPostData] = useState({
    myImage:"",
    body:"",
    user_id:user.id || null,
    group_id:param.id,
    id :post.id
  });
  const handleChange = (e)=>{
    const newData = { ...postData }
    newData[e.target.name] = e.target.value
    setPostData(newData)
    console.log(newData)
  }
  const handleImage = (event) => {
    const newData = { ...postData }
    newData[event.target.name] = event.target.files[0]
    setPostData(newData)
    console.log(newData)
  
  };

  
   const handelsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('id', postData.id)
    formData.append('post_img', postData.myImage)
    formData.append('body', postData.body)
    formData.append('user_id', postData.user_id)
    formData.append('group_id', postData.group_id)
    
    console.log(formData.get('post_img'))
    console.log(formData.get('body'))
    console.log(formData.get('user_id'))
    console.log(formData.get('group_id'))
    PostService.updatePost(formData).then(function(res){
      console.log(res)
      setGroupRender({state: 'update'})
      }) 
    console.log(postData)
    }


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
      <form onSubmit={handelsubmit} className="infoForm">
        <h1>Update Post</h1>

        <div>
          <input
            type="text"
            onChange={handleChange}
            className="infoInput"
            name="body"
            placeholder="What's on your mind ?"
          />

        </div>

        

        <div>

            Change Image
            <input type="file" name="myImage"  onChange={handleImage}/>
        </div>

        <button type="submit" className="button infoButton" onClick={() => setModalOpened(false)}
        >Update</button>
      </form>
    </Modal>
  );
}

export default GroupEditPostModal;
