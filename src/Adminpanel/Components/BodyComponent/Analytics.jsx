// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
// } from "@material-ui/core";
// import { blue, green, lightBlue, red, teal } from "@material-ui/core/colors";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
// import { useStyles } from "../BodyComponent/BodyStyles";
// import GraphComponent from "../../Common/GraphComponent";
// import { fakeArrayGenrator } from "../../Common/fakeDataGenetator";
// import { PageHeader } from "../../Common/Components";

// export default function Analytics() {
//   const classes = useStyles();
//   const [hasFetched, setHasFetched] = useState(false);

//   const DisplayData = [
//     // {
//     //   label: "Post",
//     //   value: "2,390",
//     //   icon: <ArrowDropUpIcon />,
//     //   iconLabel: "7%",
//     // },
//     // {
//     //   label: "Pages",
//     //   value: "180",
//     //   icon: <ArrowDropUpIcon />,
//     //   iconLabel: "5.3%",
//     // },
//     {
//       label: "New Visitor",
//       value: "450",
//       icon: <ArrowDropDownIcon />,
//       iconLabel: "4.1%",
//     },
//     {
//       label: "Total Visitor",
//       value: "37450",
//       icon: <ArrowDropDownIcon />,
//       iconLabel: "2.5%",
//     },
//   ];

//   const GraphData = [
//     // {
//     //   label: "Post",
//     //   data: fakeArrayGenrator({ length: 10, digit: 100 }),
//     //   bgColor: lightBlue[50],
//     //   brColor: blue["A200"],
//     // },
//     // {
//     //   label: "Pages",
//     //   data: fakeArrayGenrator({ length: 10, digit: 100 }),
//     //   bgColor: blue[50],
//     //   brColor: blue["A700"],
//     // },
//     {
//       label: "New Visitor",
//       data: fakeArrayGenrator({ length: 10, digit: 100 }),
//       bgColor: green[50],
//       brColor: green["A400"],
//     },
//     {
//       label: "Total Visitor",
//       data: fakeArrayGenrator({ length: 10, digit: 100 }),
//       bgColor: teal[50],
//       brColor: teal["A400"],
//     },
//   ];

//   //updating the graph
//   useEffect(() => {
//     if (!hasFetched) {
//       GraphData.map((item) =>
//         GraphComponent({
//           id: item.label,
//           data: item.data,
//           bgColor: item.bgColor,
//           brColor: item.brColor,
//         })
//       );
//       setHasFetched(true);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [DisplayData]);

//   return (
//     <Box mt={2}>
//       {/* //title section  */}
//       <PageHeader  title='Analytics' />

//       {<Grid container spacing={1} className={classes.section}>
//         {DisplayData.map((item, i) => (
//           <Grid key={i} item xs={6} sm={3} md={3}>
//             <Card>
//               <CardContent className={classes.displayCard}>
//                 <canvas
//                   id={item.label}
//                   className={classes.displayCardGraph}></canvas>
//                 <Box className={classes.cardDataContent}>
//                   <Typography
//                     variant='subtitle2'
//                     className={classes.cardLabel}
//                     gutterBottom={true}>
//                     {item.label}
//                   </Typography>
//                   <Typography
//                     variant='h4'
//                     component='h2'
//                     className={classes.cardHeader}>
//                     {item.value}
//                   </Typography>
//                   <Box className={classes.ratio}>
//                     <Button
//                       startIcon={item.icon}
//                       size='small'
//                       style={{
//                         color: item.label[0] === "P" ? green[700] : red[400],
//                         fontSize: "1.1rem",
//                       }}>
//                       {item.iconLabel}
//                     </Button>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>}

//       {/* section blog graph  */}
//       {/* <BlogGraph /> */}
//       {/* <Section3 /> */}
//     </Box>
//   );
// }

import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { PageHeader } from '../../Common/Components';
import logo from '../../../components/assets/img/alive.jpg'
import axios from 'axios';
import { topfans, toptracks } from '../../../api/config';
import { useEffect } from 'react';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Stack } from '@mui/system';


const Analytics = () => {

  let token = localStorage.getItem('logintoken');
  let [toptrack, setToptracks] = useState([]);
  let [topfan, setTopfans] = useState([]);

  useEffect(() => {
    ttrack();
    tfans();
  }, [])
  const ttrack = () => {
    axios(
      {
        url: `${toptracks}`,
        method: 'get',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    ).then((res) => {
      console.log(res.data.getTrack);
      setToptracks(res.data.getTrack);
    }).catch((err) => {
      console.log(err);
    })
  }
  const tfans = () => {
    axios(
      {
        url: `${topfans}`,
        method: 'get',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    ).then((res) => {
      console.log(res.data.topFans);
      setTopfans(res.data.topFans);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      <Box mt={2}>
        {/* //title section  */}
        <PageHeader title='Analytics' />
      </Box>
      <div style={{ background: 'white', width: "500px", height: '600px' }}>
        <div style={{ background: 'gray' }}>
          <p style={{ color: 'white' }}><hr />&nbsp;&nbsp;TOP TRACKS<hr /></p>
        </div>
        <div>

          {toptrack.map((track) => {
            return (
              <>
                <div style={{ float: "left" }}>
                  <img style={{ width: '100px', height: '100px', marginLeft: '20px' }} src={track.imageName} alt="/" />
                  <p style={{ textAlign: "center" }}>&nbsp;&nbsp;&nbsp;&nbsp;{track.musicPlayed}</p>
                </div>
              </>
            )
          })}
        </div><br /><br /><br /><br /><br />
        <div style={{ background: 'gray' }}>
          <p style={{ color: 'white' }}><hr />&nbsp;&nbsp;TOP FANS<hr /></p>
        </div>
        <div>
          {topfan.map((fan) => {
            return (
              <>
                <div style={{ float: 'left' }}>
                  <Stack direction="row" style={{ marginLeft: '20px' }}>
                    <Avatar style={{ width: '100px', height: '100px', background: '#1F2D5A', borderRadius: '0px' }} >{fan.username}</Avatar>
                  </Stack>

                  <p style={{ textAlign: "center" }}>&nbsp;&nbsp;&nbsp;&nbsp;{fan.topuser}</p>

                </div>
              </>
            )
          })}
        </div><br /><br /><br /><br /><br />
        <div style={{ background: 'gray' }}>
          <p style={{ color: 'white' }}><hr />&nbsp;&nbsp;TOP COUNTRIES<hr /></p>
        </div>
        <div>
          {topfan.map((item) => {
            return (
              <>
                <div style={{ float: 'left' }}>
                  <Stack direction="row" style={{ marginLeft: '20px' }}>
                    <Avatar style={{ width: '100px', height: '100px', background: '#2F76DB', borderRadius: '0px' }} >{item.country}</Avatar>
                  </Stack>
                </div>
              </>
        )
          })}
        {/* <div style={{ float: 'left' }}>
          <Stack direction="row" style={{ marginLeft: '20px' }}>
            <Avatar style={{ width: '100px', height: '100px', background: '#1F2D5A', borderRadius: '0px' }} >{topfan.country}</Avatar>
          </Stack>
        </div> */}
      </div>

      {/* <Stack direction="row" spacing={3}>
            <Avatar style={{ width: '100px', height: '100px' }}></Avatar>
            
            <Avatar style={{ width: '100px', height: '100px' }}></Avatar>
          </Stack>
          {/* <p style={{textAlign:'center'}}>hello</p> */}
      {/* </div> */}
      {/* <div>
          <div style={{float:"left"}}>
          <img style={{width:'100px' , height:'100px', marginLeft:'20px'}} src={logo} alt="/" />
          <p style={{textAlign:"center"}}>hello</p>
          </div> */}
      {/* <div style={{float:"left"}}>
          <img style={{width:'100px' , height:'100px', marginLeft:'20px'}} src={logo} alt="/" />
          <p>hello</p>
          </div> */}
      {/* <img style={{width:'100px' , height:'100px', float:'left' ,marginLeft:'20px'}} src={logo} alt="/" />
          <img style={{width:'100px' , height:'100px', float:'left', marginLeft:'20px'}} src={logo} alt="/" />
          <img style={{width:'100px' , height:'100px', float:'left', marginLeft:'20px'}} src={logo} alt="/" /> */}
      {/* </div> */}
    </div>
    </>
  )
}
export default Analytics;