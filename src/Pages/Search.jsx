// import React, {useEffect, useState} from 'react';
// import './css/Search.scss';
// import Container from "../components/fragment/Container";
// import {useSelector} from "react-redux";
// import MusicCard from "../components/fragment/MusicCard";
// import SearchMusic from "../components/assets/img/searchMusic.svg";
// import SearchMusicMp3 from "../components/assets/img/searchMusicMp3.svg";
// import SearchMusicDisc from "../components/assets/img/searchMusicDisc.svg";
// import ArrowUp from '../components/assets/img/left.svg';

// const Search = () => {
//     const {playlists, search} = useSelector(state => state.musicReducer);
//     const [searchResult, setSearchResult] = useState([]);
//     useEffect(() => {
//         setSearchResult(playlists.filter((i) => (
//             (i.name.toLowerCase().startsWith(search))
//             ||
//             (i.author_name.toLowerCase().startsWith(search))
//             ||
//             (i.musicName.toLowerCase().startsWith(search))
//             ||
//             (i.lang && i.lang.toLowerCase().startsWith(search))
//         )));
//     }, [search, playlists]);
//     return (
//         <Container>
//             {
//                 (search === "" || search === null)
//                     ?
//                     <div className={"Search"}>
//                         <div className="Search-img">
//                             <img className={"Rotate-img"} src={SearchMusicDisc} alt="search-music-icon"/>
//                             <img src={SearchMusicMp3} alt="search-music-icon"/>
//                             <img src={SearchMusic} alt="search-music-icon"/>
//                             <img className={"Arrow"} src={ArrowUp} alt=""/>
//                         </div>
//                     </div>
//                     :
//                     <div className={"Search-result"}>
//                         {
//                             searchResult.length === 0
//                                 ?
//                                 <div className={"Search-fallback"}>
//                                     No result found.
//                                 </div>
//                                 :
//                                 searchResult.map((item) => (
//                                     <MusicCard key={item.id} music={item}/>
//                                 ))
//                         }
//                     </div>
//             }
//         </Container>
//     );
// }

// export default Search;
// import React, { useState, useEffect } from 'react';
// import './css/Search.scss';
// import Container from "../components/fragment/Container";
// import axios from 'axios'
// import { TextField} from '@mui/material';

// const Search = () => {
//     const [songs, setSongs] = useState([]);
//     const [query, setQuery] = useState("");

//     const searchApi = () => {
//         axios(
//             {
//                 url: `http://localhost:5001/api/user/search?keyWord=`,
//                 method: "get"
//             })
//             .then((response) => {
//                 setSongs(response.data.getSong);
//                 console.log(response.data.getSong);
//             }).catch((err) => {
//                 console.log(err);
//             })
//     }
//     useEffect(() => {
//         searchApi();
//     }, [])
//     return (
//         <Container>
//             {/* <TextField id="outlined-search" 
//              label="Search field" 
//              type="search" 
//              sx={{mt:5}}
//              onChange={(e) => setQuery(e.target.value)} /> */}
//             <input type="text"
//                 placeholder="search here"
//                 style={{ marginLeft: 100, marginTop: 10, textalign: "center", width: 400 }}
//                 onChange={(e) => setQuery(e.target.value)} />
//             {songs.filter((user) =>
//                 user.trackTitle.toLowerCase().includes(query)).map((item, i) => {
//                     return (
//                         <>
//                             {/* <div className="row" key={i} >
//                             <div className="leftcolumn"
//                               sx={{ m:2}}
//                               >
//                                 <div className="card">
//                                     <h2>{item.trackTitle}</h2>
//                                     <img src={item.imageName} className="img" alt="" />
//                                     <audio controls>
//                                         <source src={item.music} type="audio/ogg" />
//                                     </audio>
//                                 </div>
//                             </div>
//                         </div> */}
//                             <div style={{ width: '100%', height: '55px', background: 'white', margin: '10px', marginLeft: "100px", float: 'left' }}>
//                                 <div>
//                                     <img src={item.imageName} alt="/" style={{ width: '100px', height: '55px', float: 'left' }} />
//                                 </div>
//                                 <div style={{ height: '100px', float: 'left' }}>
//                                     <audio controls>
//                                         <source src={item.music} type="audio/ogg" />
//                                     </audio>
//                                 </div >
//                                 <div style={{ float: 'left', textAlign: 'center', width: '200px', height: '5px' }}>
//                                     <h5>{item.trackTitle}</h5>  </div>
//                             </div>
//                         </>
//                     )
//                 })}
//         </Container>
//     );
// }

// export default Search;

import React, { useState, useEffect } from 'react';
import './css/Search.scss';
import Container from "../components/fragment/Container";
import axios from 'axios'
import { mostdiscussed, search } from '../api/config';
// import { TextField} from '@mui/material';

const Search = () => {
    const [songs, setSongs] = useState([]);
    const [query, setQuery] = useState("");
    //    console.log(discuss);
    //   console.log(upid);
    const searchApi = () => {
        axios(
            {
                url: `${search}`,
                method: "get"
            })
            .then((response) => {
                setSongs(response.data.getSong);
                console.log(response)
                //  const article=response.data.getSong ;
                //  console.log(article);
                //  setUpid(article.id);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        searchApi();
    }, [])

    const MostDiscuss = (id) => {
        console.log(id);
        axios(
            {
                url: `${mostdiscussed}${id}`,
                method: "get"
            })
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <Container>
            {/* <TextField id="outlined-search" 
             label="Search field" 
             type="search" 
             sx={{mt:5}}
             onChange={(e) => setQuery(e.target.value)} /> */}
            {/* <h3>{discuss.status}</h3>
            <p>{discuss.id}</p> 
            <h1>{discuss.trackTitle}</h1>       */}
            <input type="text"
                placeholder="search here"

                style={{ marginLeft: 100, marginTop: 10, textalign: "center", width: 400 }}
                onChange={(e) => setQuery(e.target.value)} />
            {songs.filter((user) =>
                user.trackTitle.toLowerCase().includes(query)).map((item, i) => {
                    return (
                        <>

                            {/* <div className="row" key={i} >
                            <div className="leftcolumn"
                              sx={{ m:2}}
                              >
                                <div className="card">
                                    <h2>{item.trackTitle}</h2>
                                    <img src={item.imageName} className="img" alt="" />
                                    <audio controls>
                                        <source src={item.music} type="audio/ogg" />
                                    </audio>
                                </div>
                            </div>
                        </div> */}
                            <div 
                            onClick={()=>MostDiscuss(item.id)}
                            style={{ width: '100%', height: '55px', background: 'white', margin: '10px', marginLeft: "100px", float: 'left' }}>
                                <div>
                                    <img src={item.imageName}
                                    //  onClick={() => MostDiscuss(item.id)}
                                        alt="/" style={{ width: '100px', height: '55px', float: 'left' }} />
                                </div>
                                <div style={{ height: '100px', float: 'left' }}>
                                    <audio controls>
                                        <source src={item.music} type="audio/ogg"/>
                                    </audio>
                                </div >
                                <div style={{ float: 'left', textAlign: 'center', width: '200px', height: '5px' }}>
                                    <h5>{item.trackTitle}</h5>  </div>
                            </div>
                        </>
                    )
                })}
        </Container>
    );
}

export default Search;