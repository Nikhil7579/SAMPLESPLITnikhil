import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  // console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "White",
      backgroundColor: blue["A400"],
    },
    
    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "rgb(191,191,191)",
      boxSizing: "border-box",
      padding: "50px 24px 24px 270px",
      marginTop: "-55px",
      fontStyle: 'proxima-nova',
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
    },
    logo: {
      lineHeight: "47px",
      color: "inherit",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      background: "rgb(4,4,5)",
      color: "#4169e1",
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",

    },
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "64px",
      background: "rgb(40,40,40)",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
      color: 'white',
      transition: "0.8s",

      "&:hover  div": {
        color: blue["A400"],
      },
    },
    navButton: { width: "100%", textTransform: "capitalize" },
    selectedNav: {
      color: `${blue[800]} !important`,
      marginTop: "0px",
      fontWeight: " bolder",
      " & div": {
        color: `${blue[800]} !important`,
      },
    },
  };
});
