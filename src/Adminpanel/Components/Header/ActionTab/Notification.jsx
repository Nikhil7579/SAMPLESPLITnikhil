import React, { Fragment } from "react";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
} from "@material-ui/core";

import { useStyles } from "../HeaderStyle";

export default function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   console.log("handleClicked ", event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Alex", description: "likes your post ..." },
    { label: "Breza", description: "connented on your feeds ..." },
    { label: "Kayes", description: "connented on your feeds ..." },
  ];

  return (
    <Fragment>
      {/* <IconButton
        aria-controls='notification'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={dropDownData.length} color='secondary'>
          <NotificationsRoundedIcon />
        </Badge>
      </IconButton> */}
      <Menu
        id='notification'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        placement='bottom-start'>
        <List dense={true} className={classes.dropdownlist}>
          {dropDownData.map((item, i) => (
            <ListItem
              key={i}
              component={Button}
              onClick={handleClose}
              className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.navImg}>{item.label[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.label}
                secondary={item.description}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Fragment>
  );
}
