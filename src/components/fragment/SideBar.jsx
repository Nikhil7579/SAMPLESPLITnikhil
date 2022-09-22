import React, { useContext } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../../api/Theme";
import { ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined } from "@material-ui/icons";
import CreateIcon from '@mui/icons-material/Create';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import CallIcon from '@mui/icons-material/Call';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
              
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={CallSplitIcon} href={"/home/splitSongs"} title={"Split-songs"} />
                <SideBarOptions className={"lib-sub"} Icon={MusicNoteIcon} href={"/home/freestem"} title={"Free Stems"} />
                <SideBarOptions className={"lib-sub"} Icon={CreateIcon} href={"/home/blog"} title={"Blog"} />
                <SideBarOptions className={"lib-sub"} Icon={CallIcon} href={"/home/contact"} title={"Contact us"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"} title={"About"} />
                {/* <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"} title={"Search"} /> */}
                
               {/*  <SideBarOptions className={"lib-sub"} Icon={RateReviewIcon} href={"/home/splitSongs"} title={"Blog"} /> */}
                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
           {/*  <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>MY PLAYLIST</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"} title={"Instrumental"} />
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"} title={"Electronic"} />
            </div> */}
        </aside>
    );
}

/*
*
* */
export default SideBar;