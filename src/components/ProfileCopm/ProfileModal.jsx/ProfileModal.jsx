import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import UserService from "../../../apis/UserService";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const [data, setData] = useState({
    user_name:"",
    phone:"",
    email:"",
    profileImg:"",
    coverImg:"",
  })
  const handleChange = (e)=>{
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData)
  }
  const handleImage = (e) =>{
    const newData = { ...data }
    newData[e.target.name] = e.target.files[0]
    setData(newData)
    console.log(newData)
  }
  const handelsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('user_name', data.user_name)
    formData.append('phone', data.phone)
    formData.append('email', data.email)
    formData.append('profileImg', data.profileImg)
    formData.append('coverImg', data.coverImg)
    console.log(formData.get('user_name'))
    console.log(formData.get('phone'))
    console.log(formData.get('email'))
    console.log(formData.get('profileImg'))
    console.log(formData.get('coverImg'))
    UserService.updateUser(formData).then(function(res){
      console.log(res)
      }) 
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
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            onChange={handleChange}
            className="infoInput"
            value={data.user_name}
            name="user_name"
            placeholder="Full Name"
          />

          <input
            type="text"
            onChange={handleChange}
            className="infoInput"
            value={data.phone}
            name="phone"
            placeholder="Phone"
          />
        </div>

        <div>
          <input
            type="text"
            onChange={handleChange}
            className="infoInput"
            value={data.email}
            name="email"
            placeholder="Email"
          />
        </div>

      

        <div>
            Profile Image 
            <input type="file" name='profileImg'  onChange={handleImage}
            />
            Cover Image
            <input type="file" name="coverImg"  onChange={handleImage}
            />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
