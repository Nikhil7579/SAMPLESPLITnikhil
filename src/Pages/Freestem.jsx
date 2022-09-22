import React from 'react'
import drumsImg from '../components/assets/img/drums.jpg'
import vocalImg from '../components/assets/img/vocals.jpg'
import sampleImg from '../components/assets/img/sample.jpg'
import beatImg from '../components/assets/img/beat.jpg'
import SearchBar from '../components/fragment/SearchBar'

const Freestem = () => {
  return (
    <>
         <SearchBar/>
         <br />

          <div className="category" style={{display:'inline-flex',margin:'20px 0px 0px 60px'}}>
          <div className='categoryCard'>
                  <h2 style={{margin:'0 5px 5px 80px'}}>Drums</h2>
             <img src={drumsImg} alt="" />
          </div>
          &nbsp; 
          <div className='categoryCard'>
                  <h2 style={{margin:'0 5px 5px 80px'}}>Vocals</h2>
             <img src={vocalImg} alt="" />
          </div>
          &nbsp; 
          <div className='categoryCard'>
                  <h2 style={{margin:'0 5px 5px 80px'}}>Sample</h2>
             <img src={sampleImg} alt="" />
          </div>
          &nbsp;
          <div className='categoryCard'>
                  <h2 style={{margin:'0 5px 5px 80px'}}>Beats</h2>
             <img src={beatImg} alt="" />
          </div>
          </div>
    </>
  )
}

export default Freestem