import React, { useContext, useEffect, useState } from "react";
import './css/Home.scss';
import Navigation from "../components/fragment/Navigation";
import MobileTopNavigation from "../components/fragment/MobileTopNavigation";
import SideBar from "../components/fragment/SideBar";
import FooterMusicPlayer from "../components/fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../components/fragment/BottomNavigationMobile";
import MusicCardContainer from "../components/fragment/MusicCardContainer";
import { useSelector } from "react-redux";
import { ThemeContext } from "../api/Theme";
import Profile from "./Profile";
import AddMusic from "../components/fragment/AddMusic";
import FooterSelectMusic from "../components/fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../components/fragment/CurrentPlayingLarge";
import Search from "./Search";
import About from "./About";
import Playlist from "../components/fragment/Playlist";
import { Skeleton } from "@material-ui/lab";
import UserBlog from './UserBlog';
import Splitsongs from "./Splitsongs";
import Freestem from "./Freestem";
import Contact from "./Contact";


function getCurrPage(pathName) {
    switch (pathName) {
        case "/home":
            return <MusicCardContainer />
        case "/home/search":
            return <Search />
        case "/home/profile":
            return <Profile />
        case "/home/add":
            return <AddMusic />
        case "/home/about":
            return <About />
        case "/home/blog":
            return <UserBlog />
        case "/home/splitSongs":
            return <Splitsongs />
        case"/home/freestem":
            return <Freestem/>  
        case"/home/contact":
            return <Contact/>             
        default:
            if (pathName.startsWith("/home/playlist/")) {
                return <Playlist />
            }
            return null
    }
}

function Home() {


    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<MusicCardContainer />);

    let pathname = window.location.pathname;
    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const useStyle = useContext(ThemeContext);
    const { playing, bannerOpen } = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);


    return (
        <div style={useStyle.component} className={"home-container"}>
            {
                !loaded ?
                    <div className="Home-skeleton">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"} />
                    </div>
                    :
                    <>
                        {
                            screenSize <= 970 ?
                                <MobileTopNavigation /> :
                                <Navigation />
                        }
                        <section className={"home-music-container"}>
                            <div className="sidebar-home">
                                <SideBar />
                            </div>
                            <div className="main-home">
                                {
                                    Page
                                }
                            </div>
                        </section>
                        {
                            bannerOpen
                            &&
                            <section className="current-large-banner">
                                <CurrentPlayingLarge />
                            </section>
                        }
                        <React.Fragment>
                            {
                                currMusic
                                    ?
                                    <FooterMusicPlayer music={currMusic} />
                                    :
                                    <FooterSelectMusic />
                            }
                            {
                                screenSize <= 970 && <BottomNavigationMobile />
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default Home;