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
  const [inputfield, setInputfield] = useState('')
  const [inputtype, setInputtype] = useState('')
  const [beat, setBeat] = useState('')
  const [key, setKey] = useState('')
  const [primary, setPrimary] = useState('')
  const [songtype, setSongtype] = useState('')
  const [image, setImage] = useState('')
  /* const classes = useStyles(); */

  const Search = () => {

    console.log(inputfield, inputtype, beat, key, primary, songtype, image)

    axios(
      {
        url: "http://localhost:5001/api/admin/audioUpload",
        method: 'post',
        data: {
          inputfield: inputfield,
          inputtype: inputtype,
          beat: beat,
          key: key,
          primary: primary,
          songtype: songtype,
          image: image
        }
      })
      .then(result => {
        console.log(result)
      })
      .catch(function (error) {
        console.log(error);
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
        <div style={{display:'flex-box'}}>
          <TextField
            id="outlined-required"
            label="Track Title"
            onChange={(e) => setInputfield(e.target.value)}
            sx={{ backgroundColor: "white",
            textColor: "red"}}
          />
          <TextField
            id="outlined-required"
            label="Track Type"
            onChange={(e) => setInputtype(e.target.value)}

          />
          <TextField
            id="outlined-required"
            label="BPM(Beat per minute)"
            onChange={(e) => setBeat(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Key(Optional)"
            onChange={(e) => setKey(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Primary genre"
            onChange={(e) => setPrimary(e.target.value)}
          />
          <TextField
            id="filled-search"
            type='file'
            // label="song type"
            onChange={(e) => setSongtype(e.target.value)}
            variant="filled"
          />
          <TextField
            id="filled-search"

            // label="Set Image"
            onChange={(e) => setImage(e.target.value)}
            variant="filled"
            type='file'
          />
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