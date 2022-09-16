import React, { useState } from "react";
import axios from "axios";
import { border } from "@mui/system";

export default function ViewMusic() {
  let token = localStorage.getItem('logintoken')
  const [data, updatedata] = useState([]);

  const Viewmusic = () => {
    // axios(
    //   {
    //     url: "http://localhost:5001/api/admin/getAllAudio",
    //     method: "get",
    //     headers: {
    //       "Authorization": `Bearer ${token}`
    //     }
    //   }
    // ).then((response) => {
    //   console.log(response);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }
  const UserViewmusic = () => {
    axios(
      {
        method: "get",
        url: "http://localhost:5001/api/user/getAllPublicMusic",
      }
    ).then((response) => {
      console.log(response);
      updatedata(response.data.getAllmusic)
    }).catch((err) => {
      console.log(err);
    })
  }
  //   async function UserViewmusic() {
  //     let res=await axios.get("http://localhost:5001/api/user/getAllPublicMusic")
  //     // return await res.json()
  //     console.log(res)
  //     .then((res)=>{
  //       console.log(res);
  //  }).catch((err)=>{
  //       console.log(err);
  //  })


  return (
    <div>
      <h1 style={{color:"white"}}>VIEW MUSIC</h1>
      <button onClick={Viewmusic} >view music</button>
      <button onClick={UserViewmusic} >view music</button>
      <audio controls style={{ height: '200px', width: '300px' }}>
        <source src="" type="" />
      </audio>
      {data.map((item, i) => {
        return (
          <>
            <audio controls key={i}>
              <source src={item.music} type="audio/mp3" />
            </audio>
          </>
        )
      })}
    </div>
  );
}
