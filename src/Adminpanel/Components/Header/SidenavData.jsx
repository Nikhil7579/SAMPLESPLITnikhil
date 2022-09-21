import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink} from "react-router-dom";
import { useStyles } from "./HeaderStyle";

import DashboardIcon from "@material-ui/icons/Dashboard";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PostAddIcon from "@material-ui/icons/PostAdd";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";

export default function SidenavData({ handleDrawerClose }) {

  const adminLogout = () => {
    // localStorage.clear();
    // window.location.href = "/adminlogin";
    const token = localStorage.getItem("logintoken")
    console.log(token)
    const hello = (token) => {
      axios(
        {
          url: "http://localhost:5001/api/admin/logOut",
          method: "delete",
          headers: {
                  "Authorization": `Bearer ${token}`
                }
        }
      )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // const logintoken = response.data.token
            // console.log(response.data.token)
            // localStorage.setItem('logintoken', logintoken)
              // window.location.href="/dashboard";
                        localStorage.clear();
                         window.location.href = "/adminlogin";
                        // setTimeout(()=>{
                        //   history.push('/adminlogin');

                        // },1000)
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
    hello(token)
    // const api = axios(
    //   {
    //     url: "http://localhost:5001/api/admin/logOut",
    //     method: "DELETE",
    //     headers: {
    //       "Authorization": `Bearer ${token}`
    //     }
    //   }.then((Response) => {
    //     console.log(Response)
    //     // if (Response.status === 200) {
    //     //   localStorage.clear();
    //     //   // window.location.href = "/adminlogin";
    //     // }
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // )
    console.log(hello)
  }
    // let res = axios.delete("http://localhost:5001/api/admin/logOut");
    // if(res.status===204)
    // {
    //   localStorage.clear();
    //   window.location.href="/adminlogin"; 
    //   console.log("success")
    // }
   
  //   const headers = { 
  //     'Authorization': 'Bearer my-token',
  //     'My-Custom-Header': 'foobar'
  // };
  // axios.delete('https://reqres.in/api/posts/1', { headers })
  //     .then((response) => {
  //       if(response.status===200)
  //       {
  //         localStorage.clear();
  //         window.location.href="/adminlogin";
  //       }
  //     })
  
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/dashboard", icon: <DashboardIcon /> },
    { label: "Upload Music", link: "/upload", icon: <UploadFileIcon /> },
    { label: "ViewMusic", link: "/viewmusic", icon: <PostAddIcon /> },
    {
      label: "Analytics",
      link: "/analytics",
      icon: <AnalyticsIcon />,
    },
    { label: "Admin Details", link: "/admindetails", icon: <ExitToAppIcon /> },
    { label: "Blog", link: "/blog", icon: <ExitToAppIcon /> },
    // { label: "Logout", link : "/",  icon: <ExitToAppIcon onClick={adminLogout} /> },
  ];

  return (
    <>
    <List>
      {listItemData.map((item) => (
        <Button
          size='small'
          onClick={() => handleDrawerClose()}
          className={classes.navButton}>
          <ListItem
            exact
            key="ListItem"
            component={NavLink}
            to={item.link && item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText sx={{ mb: 5 }}>{item.label}</ListItemText>
          </ListItem>
        </Button>

      ))}
      {/* <button onClick={adminLogout}>
        Logout
      </button> */}
    </List>
     <Button size="small" onClick={adminLogout}>
     Logout
   </Button>
   </>
  );
}
