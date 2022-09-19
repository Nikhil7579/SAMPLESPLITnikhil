import React, { useState,useEffect } from "react";
import axios from "axios";

export default function ViewMusic() {

  // let token = localStorage.getItem('logintoken')
  let [data,updatedata]=useState([]);


  const AdminProfile = () => {
    axios(
      {
        // API not Work
        url: "http://localhost:5001/api/user/getAllPublicMusic",
        method: "get",
        header: {
          'Content-Type': 'application/json'
          
        }
      }
    ).then((response) => {
      console.log(response)
      updatedata(response.data.getAllmusic)
    })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    AdminProfile();
  }, [])

  return (
    <div>

      <h1 style={{ color: "white" }}>VIEW MUSIC</h1>
      {/* <audio controls style={{ height: '200px', width: '300px' }}>
        <source src="" type="" />
      </audio> */}
      {data.map((item,i)=>{
        return(
          <>
        <audio controls style={{ height: '200px', width: '300px' }}>
        <source src={item.music} type="" />
      </audio>
      </>
        )  
    })}
    </div>
  );
  }

