// import React,{useState,useEffect} from 'react'
// import drumsImg from '../components/assets/img/drums.jpg'
// import vocalImg from '../components/assets/img/vocals.jpg'
// import sampleImg from '../components/assets/img/sample.jpg'
// import beatImg from '../components/assets/img/beat.jpg'
// import axios from 'axios'
// import {categoryMusic} from '../api/config'
// import { Link } from 'react-router-dom'


// const Freestem = () => {
 
// const [music, setMusic] = useState([]);
// /* const [category,setCategory]=useState('') */

// const url = categoryMusic;

//  const handleClick=(c)=>{
//      /* setCategory(c); */
//      axios(
//           {
//             url: `${url}?filterKey=${c}`,
//             method: "get"
//           }
//         ).then((response) => {
//           console.log(response.data.getSongData);
//           setMusic(response.data.getSongData)
//         }).catch((err) => {
//           console.log(err);
//         })
//  }
//  useEffect(() => {
//      handleClick("public");
//    }, []);



//   return (
//     <>
//        <div className="category" style={{display:'inline-flex',margin:'20px 0px 0px 60px'}}>
//             <div className='categoryCard' onClick={()=>handleClick('Drums')}>
//                   <h2 style={{margin:'0 5px 5px 80px'}} >Drums</h2>
//                  <img src={drumsImg} alt="" />
//             </div>
//               &nbsp; 
//              <div className='categoryCard' onClick={()=>handleClick('Vocals')}>
//                   <h2 style={{margin:'0 5px 5px 80px'}} >Vocals</h2>
//                   <img src={vocalImg} alt="" />
//              </div>
//               &nbsp; 
//              <div  className='categoryCard' onClick={()=>handleClick('Samples')}>
//                   <h2 style={{margin:'0 5px 5px 80px'}} >Sample</h2>
//                   <img src={sampleImg} alt="" />
//              </div>
//                &nbsp;
//              <div className='categoryCard' onClick={()=>handleClick('Beats')}>
//                   <h2 style={{margin:'0 5px 5px 80px'}} >Beats</h2>
//                   <img src={beatImg} alt="" />
//              </div>
//        </div>

//        <div style={{ overflow: 'hidden' }}>
//         {music.map((value, index) => {
//           return (
//             <>
//               <div style={{ width: '100%', height: '55px', background: 'white', margin: '10px',marginLeft:"100px", float: 'left' }}>
//                 <div>
//                   <img src={value.imageName} alt="/" style={{ width: '100px', height: '55px', float: 'left' }} />
//                 </div>
//                 <div style={{ height: '100px', float: 'left' }}>
//                   <audio controls>
//                     <source src={value.music} type="audio/ogg" />
//                   </audio>
//                 </div >
//                 <div style={{ float: 'left', textAlign: 'center', width: '200px', height: '55px' }}>
//                   <h5>{value.trackTitle}</h5>
//                   <p>{value.trackType}</p>
//                 </div>
//                 <div style={{ float: 'left', textAlign: 'center', width: '100px', height: '55px' }}>
//                   <h5>{value.bpm}</h5>
//                   <p>{value.keyOptional}</p>
//                 </div>
//                 <div style={{ float: 'left', textAlign: 'center', width: '100px', height: '55px' }}>
//                   <h5>{value.primaryGenre}</h5>
//                   <p>{value.type}</p>
//                 </div>
//                 {/* <Button variant="contained" onClick={async () => {
//                   let res = await axios.delete(`${deletemusic}${songs.id}`, {
//                     headers: {
//                       "Authorization": `Bearer ${token}`
//                     }
//                   });
//                   console.log(res);
//                   // if(res.status===204)
//                   // {
//                   //   alert("Music Deleted Successfully");
//                   // }
//                 }}>DELETE</Button>&nbsp;&nbsp;&nbsp;&nbsp; */}
//                 {/* <button type="button"
//                   className="btn btn-primary"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal" 
//                   onClick={()=>{
//                     setedit(songs.id)
//                   }}
//                   data-bs-whatever="@getbootstrap">EDIT</button> */}
//               </div>
//             </>
//           )
//         })}
//       </div>
          
//     </>
//   )
// }

// export default Freestem
import React,{useState,useEffect} from 'react'
import drumsImg from '../components/assets/img/drums.jpg'
import vocalImg from '../components/assets/img/vocals.jpg'
import sampleImg from '../components/assets/img/sample.jpg'
import beatImg from '../components/assets/img/beat.jpg'
import axios from 'axios'
import {categoryMusic , usermostplayed} from '../api/config'
// import { Link } from 'react-router-dom'


const Freestem = () => {
 
const [music, setMusic] = useState([]);
// const [most , setMost] = useState([])
const url = categoryMusic;

 const handleClick=(c)=>{
     axios(
          {
            url: `${url}?filterKey=${c}`,
            method: "get"
          }
        ).then((response) => {
          console.log(response.data.getSongData);
          setMusic(response.data.getSongData)
        }).catch((err) => {
          console.log(err);
        })
 }
 const MostPlayed = (id) => {
  axios(
      {    
          url: `${usermostplayed}${id}`, 
          method: "get"            
      })
  .then((response) => {
      // setMost(response.data);
      console.log(response.data);
  }).catch((err) => {
      console.log(err);
  })
} 
 useEffect(() => {
     handleClick("public");
    //  MostPlayed();
   }, []);

  return (
    <>
       <div className="category" style={{display:'inline-flex',margin:'20px 0px 0px 60px'}}>
            <div className='categoryCard' onClick={()=>handleClick('Drums')}>
                  <h2 style={{margin:'0 5px 5px 80px'}} >Drums</h2>
                 <img src={drumsImg} alt="" />
            </div>
              &nbsp; 
             <div className='categoryCard' onClick={()=>handleClick('Vocals')}>
                  <h2 style={{margin:'0 5px 5px 80px'}} >Vocals</h2>
                  <img src={vocalImg} alt="" />
             </div>
              &nbsp; 
             <div  className='categoryCard' onClick={()=>handleClick('Samples')}>
                  <h2 style={{margin:'0 5px 5px 80px'}} >Sample</h2>
                  <img src={sampleImg} alt="" />
             </div>
               &nbsp;
             <div className='categoryCard' onClick={()=>handleClick('Beats')}>
                  <h2 style={{margin:'0 5px 5px 80px'}} >Beats</h2>
                  <img src={beatImg} alt="" />
             </div>
       </div>

       <div style={{ overflow: 'hidden' }}>
        {music.map((value, index) => {
          return (
            <>
              <div 
              onClick={()=>MostPlayed(value.id)}
              style={{ width: '100%', height: '55px', background: 'white', margin: '10px',marginLeft:"100px", float: 'left' }}>
                <div 
                // onClick={()=>MostPlayed(value.id)}
                >
                  <img src={value.imageName} alt="/" style={{ width: '100px', height: '55px', float: 'left' }} />
                </div>
                <div 
                // onClick={()=>MostPlayed(value.id)}
                style={{ height: '100px', float: 'left' }}>
                  <audio controls>
                    <source src={value.music} type="audio/ogg"  
                            // onClick={()=>MostPlayed(value.id)}
                            />
                  </audio>
                </div >
                <div style={{ float: 'left', textAlign: 'center', width: '200px', height: '55px' }}>
                  <h5>{value.trackTitle}</h5>
                  <p>{value.trackType}</p>
                </div>
                <div style={{ float: 'left', textAlign: 'center', width: '100px', height: '55px' }}>
                  <h5>{value.bpm}</h5>
                  <p>{value.keyOptional}</p>
                </div>
                <div style={{ float: 'left', textAlign: 'center', width: '100px', height: '55px' }}>
                  <h5>{value.primaryGenre}</h5>
                  <p>{value.type}</p>
                </div>
                {/* <Button variant="contained" onClick={async () => {
                  let res = await axios.delete(`${deletemusic}${songs.id}`, {
                    headers: {
                      "Authorization": `Bearer ${token}`
                    }
                  });
                  console.log(res);
                  // if(res.status===204)
                  // {
                  //   alert("Music Deleted Successfully");
                  // }
                }}>DELETE</Button>&nbsp;&nbsp;&nbsp;&nbsp; */}
                {/* <button type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" 
                  onClick={()=>{
                    setedit(songs.id)
                  }}
                  data-bs-whatever="@getbootstrap">EDIT</button> */}
              </div>
            </>
          )
        })}
      </div>
          
    </>
  )
}

export default Freestem