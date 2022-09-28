import React from 'react'
import { useState } from 'react'
import '../BodyComponent/AdminDetails.css'
import axios from 'axios';
import { useEffect } from 'react';
import { PageHeader } from '../../Common/Components';
import { Box } from '@mui/material';
import { admindetailsedit, adminprofile } from '../../../api/config';
import { useHistory } from 'react-router-dom';

export default function AdminDetails() {
  // let token = localStorage.getItem("logintoken");
  let [data, updatedata] = useState([]);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let token = localStorage.getItem("logintoken")

  useEffect(() => {
    AdminProfile();
  }, []);
  const AdminProfile = () => {
    axios(
      {
        url: `${adminprofile}`,
        method: "get",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    ).then((response) => {
      // console.log(response.data)
      console.log(response.data)
      updatedata(response.data.getAdminData);
      let article = response.data.getAdminData;
      setName(article.name);
      setEmail(article.email);
      // updatepdata(response.data.getAdminData);
    })
      .catch((err) => {
        console.log(err);
      })
  }
  // const display = (e) => {
  //   // e.preventDefault();
  //   // e.persist(); 
  //   updatedata({ ...data, [e.target.name]: e.target.value })
  
  // }
  // const submit =async(e)=>{
  //     let options= { 
  //       method : 'PUT',
  //       headers : {
  //         'Content-Type' : 'aplication/json',
  //         "Authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify(pdata)
  //     }
  //     e.preventDefault();
  //     let res = await fetch(`${admindetailsedit}`,options)
  //     console.log(res);
  //     // if(res.status===200)
  //     // {
  //     //   history.push("/adminlogin");
  //     // }
  // }
 const submit = (event) => {
  event.preventDefault()
  // let token = localStorage.getItem("logintoken")
  console.log(token);
  // let config = { headers: { "Authorization": `Bearer ${token}`} };
  axios.put(`${admindetailsedit}`,{ 
    headers: {
       "Authorization" : ` Bearer ${token}` , 
       'Content-Type': 'application/json'},
 }).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err)
  })
    // Simple PUT request with a JSON body using fetch
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json',"Authorization": `Bearer ${token}` },
    //     body: JSON.stringify({ title: 'React PUT Request Example' })
    // };
    // fetch(`${admindetailsedit}`, requestOptions)
    //     .then((response) => {response.json();
    //     console.log(response)
    //   })
    //     // .then(data => this.setState({ postId: data.id }));
    //     .catch((err)=>{ console.log(err)})
}

  return (
    <>
      {/* {data.map((item) => {
        return ( */}
      {/* )
      })
      } */}
      {/* <h1> {data.email}</h1> */}
      <Box mt={2}>
        <PageHeader title='Admin Details' />
      </Box>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-12 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-10">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="" />
                      </div>
                      {/* <h6 className="f-w-600">{data.name}</h6> */}
                      {/* <p>sample split</p> */}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      {/* <button className='btn btn-primary' style={{float:'right'}}>&nbsp;&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;&nbsp;</button> */}
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ float: 'right' }} data-bs-whatever="@mdo">Edit</button>
                      <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog ">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Edit Details</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form onSubmit={submit}>
                                <div class="mb-3">
                                  <label for="recipient-name" class="col-form-label">Name</label>
                                  <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                  <label for="message-text" class="col-form-label">Email</label>
                                  <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" id="recipient-name" />
                                </div>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary">Update</button>
                              </form>
                            </div>
                            <div class="modal-footer">
                              {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary" onClick={submit} >Update</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>

                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{data.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Name</p>
                          <h6 className="text-muted f-w-400">{data.name}</h6>
                        </div>
                      </div>
                      {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Recent</p>
                          <h6 className="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                      </ul> */}
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
