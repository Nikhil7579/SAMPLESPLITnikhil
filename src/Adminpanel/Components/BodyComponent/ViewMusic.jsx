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
import { deletemusic, editmusic, updatemusic, viewmusic } from "../../../api/config";
// import "./music.js"


const ViewMusic = () => {
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
  let [updatingID,setId] = useState("");
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
useEffect(()=>{
    app();
}, [])
    const app =() =>{
      axios(
      {
        url: `${viewmusic}`,
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
  //  useEffect(()=>{
  //   show();
  //  },[])
  // const display = (e) => {
  //   e.preventDefault();
  //   setsongsedit({ ...songsedit, [e.target.name]: e.target.value })
  // }
  // const submit = (id,e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append('image', files);
  //   formData.append('music', music);
  //   formData.append('trackTitle', trackTitle);
  //   formData.append('trackType', trackType);
  //   formData.append('bpm', bpm);
  //   formData.append('keyOptional', keyOptional);
  //   formData.append('primaryGenre', primaryGenre);
  //   formData.append('type', type);
  //   console.log(id);
  //   axios(
  //     {
  //       url: `${updatemusic}${id}`,
  //       method: "put",
  //       headers: {
  //       'Content-Type': 'multipart/form-data',
  //         "Authorization": `Bearer ${token}`
  //       },
  //       data: formData,

  //     }
  //   ).then((response) => {
  //     console.log(response);
  //     // setImage("");
  //     // setMusic("");
  //     // settrackTitle("");
  //     // settrackType("");
  //     // setbpm("");
  //     // setkeyOptional("");
  //     // setprimaryGenre("");
  //     // setType("");
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }
  // const submit = (event) => {
  //   event.preventDefault()
  //   let formData = new FormData();
  //   console.log(imageName,music,trackTitle, trackType, bpm,keyOptional, primaryGenre, type,updatingID)
  //   formData.append('image', imageName);
  //   formData.append('music', music);
  //   formData.append('trackTitle', trackTitle);
  //   formData.append('trackType', trackType);
  //   formData.append('bpm', bpm);
  //   formData.append('keyOptional', keyOptional);
  //   formData.append('primaryGenre', primaryGenre);
  //   formData.append('type', type);

  //   // console.log(id);
  //   //  Simple PUT request with a JSON body using fetch
  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Authorization": `Bearer ${token}`
  //     },
  //     // data: formData ,
  //     body: formData
      
  //   };
  //   fetch(`http://localhost:5001/api/admin/updateAudioById/${updatingID}`, requestOptions)
  //     .then((response) => {
  //       response.json();
  //       console.log(response);
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  //   // .then(data => this.setState({ postId: data.id }));
  // }
 const submit=(event)=> {
  event.preventDefault()
    let formData = new FormData();
    console.log(imageName,music,trackTitle, trackType, bpm,keyOptional, primaryGenre, type,updatingID)
    formData.append('image', imageName);
    formData.append('music', music);
    formData.append('trackTitle', trackTitle);
    formData.append('trackType', trackType);
    formData.append('bpm', bpm);
    formData.append('keyOptional', keyOptional);
    formData.append('primaryGenre', primaryGenre);
    formData.append('type', type);

    axios.put(`${updatemusic}${updatingID}`, formData, {
      headers: { "Content-type": "multipart/form-data", "Authorization": `Bearer ${token}`
     },
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
	// 	fetch(`${updatemusic}${updatingID}`, {
	// 		method: 'PUT',
	// 		body: JSON.stringify({
	// 			// id: 1,
	// 			title: 'update',
	// 			body: formData,
	// 			// userId: 1
	// 		}),
	// 		headers: {
	// 		  "Content-type": "application/json; charset=UTF-8",
  //       "Authorization": `Bearer ${token}`
	// 		}
	// 	}).then(response => {
  //     console.log(response);
	// 					return response.json()
            
	// 	}).then(json => {
	// 		console.log(json)
			
	// 	}).catch(err =>{
  //     console.log(err);
  //   }
  //     )
  app();
	}
  // { console.log(FormData) }
  return (
    <>
      <Box mt={2}>
        <PageHeader title='View Music' />
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
                  <audio controls>
                    <source src={songs.music} type="audio/ogg" />
                  </audio>
                </div >
                <div style={{ float: 'left', textAlign: 'center', width: '200px', height: '55px' }}>
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
                <Button variant="contained" onClick={async () => {
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
                }}>DELETE</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setedit(songs.id)
                  }}
                  data-bs-whatever="@getbootstrap">EDIT</button>
                  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ marginTop: "20px" }}>
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