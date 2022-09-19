import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';
import { PageHeader } from '../../Common/Components';


const Blog = () => {

    let token = localStorage.getItem('logintoken')
    let [files, setImage] = useState(null);
    let [title, setTitle] = useState();
    let [description, setDescription] = useState();


    const BlogApi = () => {
        let formData = new FormData();
        formData.append('image', files);
        formData.append('title', title);
        formData.append('description', description);

        axios(
            {
                url: "http://localhost:5001/api/admin/createBlog",
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
        <div className="App" style={{ marginTop: '20px' }}>
      <PageHeader  title='Blog' />
            <form >
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Title"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}

                /><br />

                <TextField
                    style={{ width: "400px", margin: "5px" }}
                    type="text"
                    label="Content"
                    variant="outlined"
                    multiline
                    rows={10}
                    onChange={(e) => setDescription(e.target.value)}

                />
                <br />
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload Image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="file"
                        label='show'
                        onChange={(e) => setImage(e.target.files[0])}

                    /></Button ><br /><br /><br /><br />
                <Button variant="contained" color="primary" onClick={BlogApi}>
                    Post
                </Button>
            </form>
        </div>
    )
}

export default Blog