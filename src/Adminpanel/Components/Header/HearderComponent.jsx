import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Analytics from '../BodyComponent/Analytics';
import UploadMusic from "../BodyComponent/UploadMusic";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import ViewMusic from "../BodyComponent/ViewMusic"
import AdminDetails from "../BodyComponent/AdminDetails";
import Blog from "../BodyComponent/Blog";
import AdminlogIn from "../../adminlogin";
export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);

  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/dashboard' render={() => <Dashboard />} />
          <Route exact path='/upload' render={() => <UploadMusic />} />
          <Route exact path='/viewmusic' render={() => <ViewMusic />} />
          <Route exact path='/analytics' render={() => <Analytics />} />
          <Route exact path='/admindetails' render={() => <AdminDetails />} />
          <Route exact path='/logout' render={() => <AdminlogIn />} />
          {/* <Route exact path='/adminlogin' render={() => <AdminlogIn />} /> */}
          <Route exact path='/blog' render={() => <Blog />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
