import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink, Redirect, Route } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

import DashboardIcon from "@material-ui/icons/Dashboard";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PostAddIcon from "@material-ui/icons/PostAdd";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SidenavData({ handleDrawerClose }) {
  const adminLogout = () => {
    localStorage.clear();
    window.location.href = "/adminlogin";

  }
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
    { label: "Logout", link: "/dashboard", icon: <ExitToAppIcon onClick={adminLogout} /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          onClick={() => handleDrawerClose()}
          className={classes.navButton}>
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText sx={{ mb: 5 }}>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
