import React from 'react'
import { useState } from 'react'
import '../BodyComponent/AdminDetails.css'
import axios from 'axios';
import { useEffect } from 'react';
import { PageHeader } from '../../Common/Components';
import { Box } from '@mui/material';
import { admindetailsedit, adminprofile, changepassword } from '../../../api/config';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


export default function AdminDetails() {
  let [data, updatedata] = useState([]);
  let [pdata, updatepdata] = useState({ password: "", confirmPassword: "" });
  let token = localStorage.getItem("logintoken")
  let history=useHistory();

  console.log(token)
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
      console.log(response.data.getAdminData)
      updatedata(response.data.getAdminData);
    })
      .catch((err) => {
        console.log(err);
      })
  }
  const show = (e) => {
    updatepdata({ ...pdata, [e.target.name]: e.target.value });
    console.log(updatepdata)
  };
  console.log(token);
  const updateAdmin = (e) => {
    e.preventDefault();
    console.log(pdata.password)
    console.log(pdata.confirmPassword)
    axios(
      {
        url: `${changepassword}`,
        method: "post",
        data: {
          password: pdata.password,
          confirmPassword: pdata.confirmPassword
        },
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token} `
        }
      }
    ).then((res) => {
      console.log(res);
      localStorage.clear();
      if(res.status===200)
      {
        window.location.href="/adminlogin";

      }
    }).catch((err) => {
      console.log(err);
    })
  };
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
                      <button type="button" style={{ float: 'right' }} class="btn btn-primary" >Edit</button>
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

                    </div>
                    <bitton className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo">&nbsp;&nbsp;&nbsp;
                      Change Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <EditIcon></EditIcon>
                    </bitton>
                    <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog ">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <form onSubmit={updateAdmin}>

                            <div class="modal-body">
                              <div class="mb-3">
                                <label for="recipient-name" className="col-form-label">new password</label>
                                <input type="text" value={pdata.password} onChange={show}
                                  name="password" /* onChange={(e) => setName(e.target.value)} */ className="form-control" id="recipient-name" />
                              </div>
                              <div class="mb-3">
                                <label for="message-text" className="col-form-label">confirm password</label>
                                <input type="text" name='confirmPassword' value={pdata.confirmPassword} onChange={show}
                                  className="form-control" id="recipient-name" />
                              </div>
                              <button className='btn btn-primary' type="submit">submit</button>
                            </div>
                          </form>
                          <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary" onClick={submit} >Update</button> */}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
