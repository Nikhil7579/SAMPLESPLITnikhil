import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from 'axios';
import { Typography } from "@material-ui/core";
/* import { useStyles } from "../BodyComponent/BodyStyles"; */

// import { PageHeader } from "../../Common/Components";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import { GetPosts } from "../../Common/requestApi";
// import { useStyles } from "./BodyStyles";

const BlogPost = () => {

  let token = localStorage.getItem('logintoken')


  // const [inputfield, setInputfield] = useState('')
  // const [inputtype, setInputtype] = useState('')
  // const [beat, setBeat] = useState('')
  // const [key, setKey] = useState('')
  // const [primary, setPrimary] = useState('')
  // const [songtype, setSongtype] = useState('')
  // const [image, setImage] = useState('')
  /* const classes = useStyles(); */
  let [files, setImage] = useState(null);
  let [music, setMusic] = useState();
  let [trackTitle, settrackTitle] = useState();
  let [trackType, settrackType] = useState();
  let [bpm, setbpm] = useState();
  let [keyOptional, setkeyOptional] = useState();
  let [primaryGenre, setprimaryGenre] = useState();
  let [type, setType] = useState();


  const Search = () => {
    let formData = new FormData();
    formData.append('image', files);
    formData.append('music', music);
    formData.append('trackTitle', trackTitle);
    formData.append('trackType', trackType);
    formData.append('bpm', bpm);
    formData.append('keyOptional', keyOptional);
    formData.append('primaryGenre', primaryGenre);
    formData.append('type', type);


    axios(
      {
        url: "http://localhost:5001/api/admin/audioUpload",
        method: "post",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        data: formData,
      }
    ).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Typography
        variant='h5' align="center">
        Upload Music
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, mt: 5, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: 'flex-box' }}>
          <TextField
            id="outlined-required"
            label="Track Title"
            onChange={(e) => settrackTitle(e.target.value)}
            sx={{
              backgroundColor: "white",
              textColor: "red"
            }}
          />
          <TextField
            id="outlined-required"
            label="Track Type"
            onChange={(e) => settrackType(e.target.value)}

          />
          <TextField
            id="outlined-required"
            label="BPM(Beat per minute)"
            onChange={(e) => setbpm(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Key(Optional)"
            onChange={(e) => setkeyOptional(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Primary genre"
            onChange={(e) => setprimaryGenre(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Type"
            onChange={(e) => setType(e.target.value)}
          />
          <Button
            variant="contained"
            component="label"
          >
            Upload Image
            <input
              type="file"
              label='show'
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Button>
          <Button
            variant="contained"
            component="label"
            sx={{ ml: 10 }}
          >
            Upload Song
            <input
              onChange={(e) => setMusic(e.target.files[0])}
              type="file"
              show
            />
          </Button>
          {/* <TextField
            id="filled-search"
            type='file'
            // label="Song "
            onChange={(e) => setMusic(e.target.files[0])}
            variant="filled"
          />
          <TextField
            id="filled-search"
            // label="Image"
            onChange={(e) => setImage(e.target.files[0])}
            variant="filled"
            type='file'
          /> */}
          <Button
            onClick={Search}
            variant="contained"
            sx={{ ml: 1, mt: 18 }}
          >Upload</Button>
        </div>

      </Box>
      {/* <button 
      style={{position:"absolute",
          marginLeft:400
    }}
      >
            Search
          </button> */}
    </>
  );
}

export default BlogPost