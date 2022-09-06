import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/headphonesLogo.svg"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    
                    <h1 style={{backgroundColor:'#09143C'}}>
                    <img src={Logo} width={"24px"} alt=""/>
                       <span style={{color:'white',fontFamily:'proxima-nova'}}>SAMPLE</span> 
                       <span style={{color:'#4169e1',fontFamily:'proxima-nova'}}>SPLIT</span>
                       <span style={{fontSize:'30px',color:'#4169e1'}}>.com</span>
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;