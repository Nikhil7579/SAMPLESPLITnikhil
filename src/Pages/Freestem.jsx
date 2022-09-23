import React,{useState,useEffect} from 'react'
import drumsImg from '../components/assets/img/drums.jpg'
import vocalImg from '../components/assets/img/vocals.jpg'
import sampleImg from '../components/assets/img/sample.jpg'
import beatImg from '../components/assets/img/beat.jpg'
import axios from 'axios'
import {categoryMusic} from '../api/config'
import { Link } from 'react-router-dom'


const Freestem = () => {
 
const [music, setMusic] = useState([]);
/* const [category,setCategory]=useState('') */

const url = categoryMusic;

 const handleClick=(c)=>{
     /* setCategory(c); */
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
 useEffect(() => {
     handleClick("public");
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

       {
          music.map((value,index)=>{
                console.log(value);
               return(
                     <>
                     <div style={{margin:'20px 0px 0px 350px'}}>
                        
                         <h4>{value.trackTitle}</h4> 
                         <h4>{value.tracktype}</h4>
                         <h4>{value.bpm} <label htmlFor="bpm">Bpm</label></h4> 
                         <img src={value.imageName} alt="no img" style={{height:'70px', width:'70px'}} />
                         <audio controls >
                           <source  src={value.music} type="audio/ogg"/>  
                         </audio> 
                         {/* <Link to={value.music} download='value.music' target='_blank'> Download</Link>   */} 
                     </div>
                     </>    
               );
          })
       }
    </>
  )
}

export default Freestem