// import React, { useContext, useState } from "react";
// import '../assets/scss/Navigation.scss';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import DropDownLanguageList from "./DropDownLanguageList";
// import SearchBar from "./SearchBar";
// import Brand from "./Brand";
// import DropDownProfile from "./DropDownProfile";
// import { Avatar, Button } from "@material-ui/core";
// import { ThemeContext } from "../../api/Theme";
// import logo from '../assets/img/logoc.png'
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useHistory } from "react-router-dom";

// function Navigation() {
//     let history = useHistory();
//     const userlogout = () => {
//         localStorage.clear();
//         // window.location.href = "/userlogin"
//         history.push('/userlogin');
//     }

//     const [isLanguageListOpen, setLangList] = useState(false);
//     const [isOpenProfile, setOpenProfile] = useState(false);


//     function handleOpenLanguageList() {
//         if (isOpenProfile === true)
//             setOpenProfile(!isOpenProfile);
//         setLangList(!isLanguageListOpen);
//     }

//     function handleOpenProfile() {
//         if (isLanguageListOpen === true)
//             setLangList(!isLanguageListOpen);
//         setOpenProfile(!isOpenProfile);
//     }
//     const useStyle = useContext(ThemeContext);
//     return (
//         <nav style={useStyle.component}>
//             <Brand />
//             <div className={"navigation"}>
//                 {/* <NavigationButton href={"/home"} name={"Home"}/> */}
//                 {/* <NavigationButton href={"/home/about"} name={"About"}/>*/}
//                 {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
//             </div>
//             <SearchBar />
//             {/* <div className={"language"} onClick={handleOpenLanguageList}>
//                 <Button className={"Dropdown-btn"}
//                     endIcon={isLanguageListOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}>
//                     <div className="wrapper">
//                         <p>Music Languages</p>
//                     </div>
//                 </Button>
//                 {
//                     isLanguageListOpen
//                     &&
//                     <DropDownLanguageList />
//                 }
//             </div> */}
//             {/* <div className="profile" onClick={handleOpenProfile}>
//                 <Button className={"Dropdown-btn"}
//                     // startIcon={<Avatar style={{/* width:'30px',height:'30px',padding:'18px' */ } 
//                     {/* {<img src={logo} width={'50px'} alt="/" height={'40px'} />}</Avatar>} */}
//                     {/* // endIcon={isOpenProfile ? <ExpandMoreIcon /> : <ExpandLessIcon />}> */}

//                 {/* // </Button> */}
//                 {/* // { */}
//                 {/* //     isOpenProfile && */}
//                 {/* //     <DropDownProfile /> */}
//                 {/* // } */}
//             {/* // </div> */} 
//             <div className={"navigation"}>
//                 <LogoutIcon name={"LogOut"} onClick={userlogout} />
//             </div>
//         </nav>
//     );
// }

// export default Navigation;
import React, { useContext, useState } from "react";
import '../assets/scss/Navigation.scss';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import DropDownLanguageList from "./DropDownLanguageList";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
// import DropDownProfile from "./DropDownProfile";
// import { Avatar, Button } from "@material-ui/core";
import { ThemeContext } from "../../api/Theme";
// import logo from '../assets/img/logoc.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from "react-router-dom";
import axios from "axios";
import  {userLogOut} from "../../api/config";


function Navigation() {
    let token = localStorage.getItem("userlogintoken")
    let history = useHistory();

    const userlogout = () => {

        axios({
            url: `${userLogOut}`,
            method: "delete",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                localStorage.clear();
                history.push("/userlogin",
                );
            }
        }).catch((err) => {
            console.log(err);
        })
        // localStorage.clear();
        // window.location.href = "/userlogin"
        // history.push('/userlogin');
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand />
            <SearchBar />

{/* <span className="material-icons">logout</span> */}
           
                <LogoutIcon
                    sx={{ ml: 115 , mt:2}}
                    label='LogOut'
                    name={"LogOut"} onClick={userlogout} />
          
        </nav>
    );
}

export default Navigation;