import React from 'react';
import './css/About.scss';
import Container from "../fragment/Container";
import './css/UserBlog.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const About = () => {


    let [Blog, SetBlog] = useState([]);

    async function BlogApi() {
        let response = await axios.get("http://localhost:5001/api/user/getBloges");
        SetBlog(response.data.findBlog);
        console.log(response.data.findBlog);

    }
    useEffect(() => {
        BlogApi();
    }, [])
    return (
        <Container>
            <h1>Blog</h1>
            {Blog.map((item, i) => {
                return (
                    <>
                        <div className="row" key={i}>
                            <div className="leftcolumn">
                                <div className="card">
                                    <h2>{item.title}</h2>
                                    <h5>{item.createTime}&nbsp;&nbsp;{item.createDate}</h5>
                                    <img src={item.imageName} className="img" alt="" />
                                    {/* <p>Some text..</p> */}
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            {/* <h1>Blog</h1>
            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <img src={modi} alt=""  />
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
            </div> */}
        </Container>
    );
}

export default About;
