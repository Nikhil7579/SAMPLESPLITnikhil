// import {
//   Card,
//   CardContent,
//   Divider,
//   Grid,
//   Paper,
//   Typography,
// } from "@material-ui/core";
// import { blue, red } from "@material-ui/core/colors";
// import React, { useEffect, useState } from "react";
// import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
// import { lineGraphComponent } from "../../../Common/GraphComponent";
// import { useStyles } from "../BodyStyles";

// export default function BlogGraph() {
//   const classes = useStyles();
//   const [fetched, setFetched] = useState(false);

//   const GraphData = [
//     {
//       id: "userOverViewGraph",
//       dataSets: [
//         {
//           label: "Current Month",
//           data: fakeArrayGenrator({ length: 30, digit: 100 }),
//           borderColor: blue["A400"],
//           backgroundColor: "rgb(21 101 192 /50%)",
//           fill: true,
//           tension: 0.5,
//         },
//         {
//           label: "Last Month",
//           data: fakeArrayGenrator({ length: 30, digit: 100 }),
//           borderColor: red[500],
//           backgroundColor: "rgb(198 40 40 /30%)",
//           fill: true,
//           tension: 0.5,
//         },
//       ],
//       xAxisLabels: ["week1", "week2", "week3", "week4", "week5"],
//     },
//     {
//       id: "deviceOverViewGraph",
//       type: "pie",
//       dataSets: [
//         {
//           label: "DeskTop",
//           data: fakeArrayGenrator({ length: 3, digit: 1000 }),
//           borderColor: [blue[50], blue[800], blue[500]],
//           backgroundColor: [blue["A200"], blue[400], blue[200]],
//           fill: true,
//           tension: 0.5,
//         },
//       ],
//       xAxisLabels: ["Desktop", "Tablet", "Mobile"],
//     },
//   ];

//   useEffect(() => {
//     if (!fetched) {
//       GraphData.map((item, i) =>
//         lineGraphComponent({
//           id: item.id,
//           type: item.type,
//           dataSets: item.dataSets,
//           xAxisLabels: item.xAxisLabels,
//         })
//       );
//     }
//     setFetched(true);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [fetched]);
//   return (
//     <Grid container className={classes.section} spacing={1}>
//       <Grid item xs={12} sm={7} md={7}>
//         <Card component={Paper}>
//           <CardContent>
//             <Typography variant='h6' className={classes.cardTitle} align='left'>
//               User Overviews
//             </Typography>
//           </CardContent>
//           <Divider />
//           <CardContent>
//             <canvas
//               id='userOverViewGraph'
//               className={classes.generalGraph}></canvas>
//           </CardContent>
//         </Card>
//       </Grid>
//       {/* usedByDevices */}
//       <Grid item xs={12} sm={5} md={5}>
//         <Card component={Paper}>
//           <CardContent>
//             <Typography variant='h6' className={classes.cardTitle} align='left'>
//               Used by graph
//             </Typography>
//           </CardContent>
//           <Divider />
//           <CardContent>
//             <canvas
//               id='deviceOverViewGraph'
//               className={classes.generalGraph}></canvas>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

// import {
//   Card,
//   CardContent,
//   Divider,
//   Grid,
//   Paper,
//   Typography,
// } from "@material-ui/core";
// import { blue } from "@material-ui/core/colors";
// import React, { useEffect, useState } from "react";
// // import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
// import { lineGraphComponent } from "../../../Common/GraphComponent";
// import { useStyles } from "../BodyStyles";
// import axios from 'axios'
// import { adminbargraph } from "../../../../api/config";

// const BlogGraph = () => {
//   const classes = useStyles();
//   // const [fetched, setFetched] = useState(false);
//   const [graph, setGraph] = useState([])

//   const token = localStorage.getItem('logintoken')

//    const GraphAPI = () => {
//     axios(
//       {
//         url: `${adminbargraph}`,
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       }
//     ).then((response) => {
//       setGraph(response.data);
//       console.log(response.data.sumtData);

//     }).catch((err) => {
//       console.log(err);
//     })
//   } 
//   const GraphData = [
//     {
//       id: "userOverViewGraph",
//       dataSets: [
//         {
//           label: "Current Month",
//           // data: fakeArrayGenrator({ length: 30, digit: 100 }),
//           type: "pie",
//           data : graph.sumtData,
//           borderColor: blue["A400"],
//           backgroundColor: "rgb(21 101 192 /50%)",
//           fill: true,
//           tension: 1,
//         },
//         // {
//         //   label: "Last Month",
//         //   data: fakeArrayGenrator({ length: 30, digit: 100 }),
//         //   borderColor: red[500],
//         //   backgroundColor: "rgb(198 40 40 /30%)",
//         //   fill: true,
//         //   tension: 0.5,
//         // },
//       ],
//       xAxisLabels: ["Mon", "Tue", "Wed", "Thurs", "Fri" , "Sat" , "Sun"],
//     },

//   ];
//   useEffect(() => {
//     GraphAPI();
//     {
//       GraphData.map((item, i) =>
//              lineGraphComponent({
//                id: item.id,
//                type: item.type,
//                dataSets: item.dataSets,
//                xAxisLabels: item.xAxisLabels,
//              })
//           );
//     }
//   }, [])

//   return (
//     <Grid container className={classes.section} spacing={1}>
//       <Grid item xs={12} sm={7} md={7}>
//         <Card component={Paper}>
//           <CardContent>
//             <Typography variant='h6' className={classes.cardTitle} align='left'>
//               User Overviews
//                {graph.sumtData}
//             </Typography>
//           </CardContent>
//           <Divider />
//           <CardContent>
//             <canvas
//               id='userOverViewGraph'
//               className={classes.generalGraph}></canvas>
//           </CardContent>
//         </Card>
//       </Grid>
//       {/* <Grid item xs={12} sm={5} md={5}>
//         <Card component={Paper}>
//           <CardContent>
//             <Typography variant='h6' className={classes.cardTitle} align='left'>
//               Used by graph
//             </Typography>
//           </CardContent>
//           <Divider />
//           <CardContent>
//             <canvas
//               id='deviceOverViewGraph'
//               className={classes.generalGraph}></canvas>
//           </CardContent>
//         </Card>
//       </Grid> */}
//     </Grid>

//   );
// }

// export default BlogGraph


import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const BlogGraph = () => {

  const token = localStorage.getItem("logintoken")
  const [monthData, setMonthData] = useState([])
  const [weekData, setWeekData] = useState([])
  const [todayData, setTodayData] = useState([])
  


  const tokenAPI = (token) => {
    return ({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
  }
 
  useEffect(() => {
    const todayData = [];
      const weekData = [];
      const monthData = [];
    const fetchData = async (c) => {
      const url = `http://localhost:5001/api/admin/toptrackByDate?filterkey=${c}`
      //  const token = localStorage.getItem("logintoken");
      await fetch(url, tokenAPI(token)).then((data) => {
        // console.log("Api data", data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("ressss", res.sumtData)
        // for (const val of res) {
        if(c == "TODAY"){
          todayData.push(res.sumtData)
          setTodayData(todayData)

        }else if(c == "WEEK"){
          weekData.push(res.sumtData)
        setWeekData(weekData)

        }else if(c == "MONTH"){
          console.log(res.sumtData)
          monthData.push(res.sumtData)
        setMonthData(monthData)

        }
        //     // labelSet.push(val.name)
        // }
        // console.log(setData.data)
      }).catch(err => {
        console.log("error", err)
      })
    }
    fetchData("TODAY");
    fetchData("WEEK");
    fetchData("MONTH");
  }, [])
  console.log(monthData[0])
  const datas =  {
    labels: ['Music Viewed'],
    datasets: [
      {
        label: 'Today',
        data: todayData,
        // borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'rgba(25, 90, 13, 0.5)',
        backgroundColor :'#90f7c9',
      },
      {
        label: 'WEEK',
        data: weekData,
        // borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#43f6f6',
      },
      {
        label: 'MONTH',
        data: monthData,
        // borderColor: 'rgb(53, 162, 235)',
        // backgroundColor: 'rgba(53, 162, 235, 0.5)',
        backgroundColor: '#fcb045',
        
      },
    ],
  }
  return (
    <div style={{ width: '80%', height: '50%' }}>
      <h3 style={{textAlign:'center'}} >User View Bar Chart</h3>
      {
        // console.log("dataaaaaa", data)
      }
      <Bar data={datas} options={options} />
    </div>)
}
export default BlogGraph;