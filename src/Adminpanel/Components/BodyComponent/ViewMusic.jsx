// import { Box } from "@mui/system";
// import React from "react";
// import { PageHeader } from "../../Common/Components";
// import AudioPlayer from "../Music Player/AudioPlayer";
// import tracks from "../Music Player/tracks";

// const ViewMusic = () => {
//     return(
//         <>
//         <Box mt={2}>
//         <PageHeader title='View Music' />
//       </Box>
//       <AudioPlayer tracks={tracks} />

//         </>
//     )
// }
// export default ViewMusic;
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { deletemusic, viewmusic, editmusic } from "../../../api/config";
import { PageHeader } from "../../Common/Components";
import { Button } from "@mui/material";
import './Viewmusic.css'
import { useHistory, useParams } from "react-router-dom";
import { Grid } from "@mui/material"
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import { IconButton, Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Fade } from "@mui/material";
import { Backdrop } from "@material-ui/core";
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PaidIcon from '@mui/icons-material/Paid';
import { addprice, changestatus, deletemusic, editmusic, updatemusic, viewmusic } from "../../../api/config";
// import "./music.js"


const ViewMusic = () => {

  const hover = {
    cursor: 'pointer'
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }


  let [viewMusic, setViewMusicdetails] = useState([]);
  // let [songsedit, setsongsedit] = useState([]);
  let [imageName, setImage] = useState(null);
  let [music, setMusic] = useState(null);
  let [trackTitle, settrackTitle] = useState('');
  let [trackType, settrackType] = useState('');
  let [bpm, setbpm] = useState('');
  let [keyOptional, setkeyOptional] = useState('');
  let [primaryGenre, setprimaryGenre] = useState('');
  let [type, setType] = useState('');
  let [updatingID, setId] = useState("");
  let [price, setPrice] = useState();

  let token = localStorage.getItem("logintoken")
  const setedit = (id) => {
    console.log(id)
    // api call 
    axios(
      {
        url: `${editmusic}${id}`,
        method: "get",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }
    ).then((response) => {
      console.log(response);
      // const a = response.data.getAudioById.id;
      const article = response.data.getAudioById
      setImage(article.imageName)
      setMusic(article.music)
      settrackTitle(article.trackTitle)
      settrackType(article.tracktype)
      setbpm(article.bpm);
      setkeyOptional(article.keyOptional);
      setprimaryGenre(article.primaryGenre);
      setType(article.type);
      setId(id)

      // setsongsedit(response.data.getAudioById);

    }).catch((err) => {
      console.log(err);
    })
    // res 
  }
  // useEffect(() => {
  //   app("Default");
  // }, [])
  const caturl = viewmusic;
  const app = (c) => {
    axios(
      {
        url: `${caturl}?filterkey=${c}`,
        method: "get",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }
    ).then((response) => {
      console.log(response.data.allAudio);
      setViewMusicdetails(response.data.allAudio);

    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    app('');
  }, [])
  const submit = (event) => {
    event.preventDefault()
    let formData = new FormData();
    console.log(imageName, music, trackTitle, trackType, bpm, keyOptional, primaryGenre, type, updatingID)
    formData.append('image', imageName);
    formData.append('music', music);
    formData.append('trackTitle', trackTitle);
    formData.append('trackType', trackType);
    formData.append('bpm', bpm);
    formData.append('keyOptional', keyOptional);
    formData.append('primaryGenre', primaryGenre);
    formData.append('type', type);

    axios.put(`${updatemusic}${updatingID}`, formData, {
      headers: {
        "Content-type": "multipart/form-data", "Authorization": `Bearer ${token}`
      },
    }).then((res) => {
      console.log(res);
      app('');
    }).catch((err) => {
      console.log(err)
    });
    // app();
  }

  const songstype = (updatingID, c) => {
    console.log(updatingID);
    axios(
      {
        url: `${changestatus}${updatingID}?type=${c}`,
        method: 'get',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    ).then((res) => {
      console.log(res);
      console.log(updatingID)
      app();

    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      {/* Music List Data ..app ApI.. START */}
      <Box mt={2}>
        <PageHeader title='View Music' />

        <div style={{ maxWidth: 200 }}  >
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Your Tracks</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={10}

              // value={age}
              label="Age"
            // onChange={handleChange}
            >
              <MenuItem value={10} onClick={() => app('')} >Default</MenuItem>
              <MenuItem value={20} onClick={() => app('MostPlayed')} >MostPlayed</MenuItem>
              <MenuItem value={30} onClick={() => app('MostDiscuss')} >MostDiscussed</MenuItem>
              <MenuItem value={40} onClick={() => app('Latest')} >Letest</MenuItem>
              <MenuItem value={50} onClick={() => app('Oldest')} >Oldest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <div style={{ overflow: 'hidden' }}>
        {viewMusic.map((songs, i) => {
          return (
            <>
              <div style={{ width: '100%', height: '55px', background: 'white', margin: '10px', float: 'left' }}>
                <div key={i}>
                  <img src={songs.imageName} alt="/" style={{ width: '100px', height: '55px', float: 'left' }} />
                </div>
                <div style={{ height: '100px', float: 'left' }}>
                  <audio controls controlsList="nodownload noplaybackrate ">
                    <source src={songs.music} type="audio/ogg" />
                  </audio>
                </div >
                <div style={{ float: 'left', textAlign: 'center', width: '150px', height: '55px' }}>
                  <h5>{songs.trackTitle}</h5>
                  <p>{songs.trackType}</p>
                </div>
                <div style={{ float: 'left', textAlign: 'center', width: '100px', height: '55px' }}>
                  <h5>{songs.bpm}</h5>
                  <p>{songs.keyOptional}</p>
                </div>
                <div style={{ float: 'left', textAlign: 'center', width: '100px', height: '55px' }}>
                  <h5>{songs.primaryGenre}</h5>
                  <p>{songs.type}</p>
                </div>
                {/* <IconButton hover={hover}>
                  <PaidIcon sx={{ color: '#1F2D5A' }}
                    onClick={() =>
                      setprice(songs.id)
                    } */}
                {/* // onMouseOver={({ target }) => target.style.color = "blue"}
                  // onMouseOut={({target})=>target.style.color="black"}
                  // onMouseenter={({target})=>target.style.cursor="pointer"}


                  ></PaidIcon></IconButton> */}
                {/* <IconButton hover={hover} >
                  <PaidIcon
                    sx={{ color: '#1F2D5A' }}
                    onClick={() => console.log(songs.id)}
                  >
                  </PaidIcon>
                </IconButton> */}
                <IconButton>
                  <PaidIcon data-bs-toggle="modal" 
                  data-bs-target="#exampleModall" 
                  data-bs-whatever="@mdo" 
                  >
                    Open modal for @mdo
                    </PaidIcon>
                  
                </IconButton>
                <div style={{marginTop:'100px'}} className="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Add Price</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label for="recipient-name" className="col-form-label">Price</label>
                              <input type="number" className="form-control" id="recipient-name" />
                            </div>
                            <div className="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Add Price</button>
                        </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                <IconButton hover={hover} >
                  <EditIcon
                    sx={{ color: '#2F76DB' }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setedit(songs.id)
                    }}
                    data-bs-whatever="@getbootstrap"></EditIcon> </IconButton> &nbsp;&nbsp;&nbsp;&nbsp;
                <IconButton hover={hover} >
                  <DeleteIcon sx={{ color: 'red' }} variant="contained" onClick={async () => {
                    let res = await axios.delete(`${deletemusic}${songs.id}`, {
                      headers: {
                        "Authorization": `Bearer ${token}`
                      }
                    });
                    app();
                    console.log(res);
                    // if(res.status===204)
                    // {
                    //   alert("Music Deleted Successfully");
                    // }
                  }}></DeleteIcon> </IconButton> &nbsp;&nbsp;&nbsp;&nbsp;
                {/* }}>DELETE</Button>&nbsp;&nbsp;&nbsp;&nbsp; */}
                {/* <DeleteIcon /> */}
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={songs.type}
                    // onChange={handleChange}
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value="public" onClick={() => songstype(songs.id, 'public')}>public</MenuItem>
                    <MenuItem value="private" onClick={() => songstype(songs.id, 'private')} >private</MenuItem>
                  </Select>
                </FormControl>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ marginTop: "20px" }}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form onSubmit={submit} >
                        <div className="modal-body">
                          <div className="mb-3" >
                            <label for="recipient-name" className="col-form-label">trackTitle</label>
                            <input value={trackTitle} onChange={(e) => settrackTitle(e.target.value)}
                              name="trackTitle" type="text" className="form-control" id="recipient-name" />
                          </div><div className="mb-3">
                            <label for="recipient-name" className="col-form-label">trackType</label>
                            <input value={trackType} onChange={(e) => settrackType(e.target.value)} type="text" className="form-control" id="recipient-name" />
                          </div><div className="mb-3">
                            <label for="recipient-name" className="col-form-label">bpm</label>
                            <input value={bpm} type="text" onChange={(e) => setbpm(e.target.value)} className="form-control" id="recipient-name" />
                          </div><div className="mb-3">
                            <label for="recipient-name" className="col-form-label">keyOptional</label>
                            <input value={keyOptional} type="text" onChange={(e) => setkeyOptional(e.target.value)} className="form-control" id="recipient-name" />
                          </div><div className="mb-3">
                            <label for="recipient-name" className="col-form-label">primaryGenre</label>
                            <input value={primaryGenre} type="text" onChange={(e) => setprimaryGenre(e.target.value)} className="form-control" id="recipient-name" />
                          </div><div className="mb-3">
                            <label for="recipient-name" className="col-form-label">type</label>
                            <input value={type} type="text" onChange={(e) => setType(e.target.value)} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label for="recipient-name" className="col-form-label">Image</label>
                            <input type="file" className="form-control" id="recipient-name" onChange={(e) => setImage(e.target.files[0])} />
                            <img src={imageName} alt="/" style={{ width: '100px', height: '100px' }} />
                          </div>
                          <div className="mb-3">
                            <label for="recipient-name" className="col-form-label">Music</label>
                            <input type="file" className="form-control" id="recipient-name" onChange={(e) => setMusic(e.target.files[0])} />
                            <audio controls >
                              <source src={music} type="audio/ogg" />
                            </audio>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary"
                            //  onClick={() => {
                            //   submit(songs.id)
                            // }}
                            >Update</button>
                          </div>
                          {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Update</button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ marginTop: "20px" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form >
              <div className="modal-body">
                <div className="mb-3" >
                  <label for="recipient-name" className="col-form-label">trackTitle</label>
                  <input value={trackTitle} onChange={(e) => settrackTitle(e.target.value)}
                    name="trackTitle" type="text" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">trackType</label>
                  <input value={trackType} onChange={(e) => settrackType(e.target.value)} type="text" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">bpm</label>
                  <input value={bpm} type="text" onChange={(e) => setbpm(e.target.value)} className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">keyOptional</label>
                  <input value={keyOptional} type="text" onChange={(e) => setkeyOptional(e.target.value)} className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">primaryGenre</label>
                  <input value={primaryGenre} type="text" onChange={(e) => setprimaryGenre(e.target.value)} className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">type</label>
                  <input value={type} type="text" onChange={(e) => setType(e.target.value)} className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                <label className="custom-file-label" htmlFor="exampleInputFile">{files ? files.split('http://localhost:3000/public/uploads/') : "Choose File"}</label>
                  <input type="file" className="form-control" id="recipient-name" onChange={(e) => setImage(e.target.files[0])} />
                  <img src={files} alt="/" style={{ width: '100px', height: '100px' }} />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Music</label>
                  <input type="file" className="form-control" id="recipient-name" onChange={(e) => setMusic(e.target.files[0])} />
                  <audio controls >
                    <source src={music} type="audio/ogg" />
                  </audio>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={submit}>Update</button>
                </div>
                {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Update</button> */}
      {/* </div> */}
      {/* // </form> */}
      {/* // </div> */}
      {/* // </div> */}
      {/* </div> */}
      {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginTop:"20px"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">TrackTitle</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">trackType</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">bpm</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">keyOptional</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">primaryGenre</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div><div className="mb-3">
                  <label for="recipient-name" className="col-form-label">type</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Image</label>
                  <input type="file" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Music</label>
                  <input type="file" className="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}
export default ViewMusic