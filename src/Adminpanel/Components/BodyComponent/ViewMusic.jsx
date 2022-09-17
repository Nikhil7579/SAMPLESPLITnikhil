import React, { useState,useEffect } from "react";
import axios from "axios";

export default function ViewMusic() {

  let token = localStorage.getItem('logintoken')

  const AdminProfile = () => {
  //   axios(
  //     {
  //       // API not Work
  //       url: "http://localhost:5001/api/admin/getAllAudio",
  //       method: "post",
  //       header: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     }
  //   ).then((response) => {
  //     console.log(response)
  //   })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
  // useEffect(() => {
  //   AdminProfile();
  // })

  return (
    <div>
      <h1 style={{ color: "white" }}>VIEW MUSIC</h1>
      <button >view music</button>
      <audio controls style={{ height: '200px', width: '300px' }}>
        <source src="" type="" />
      </audio>
    </div>
  );
  }
}
