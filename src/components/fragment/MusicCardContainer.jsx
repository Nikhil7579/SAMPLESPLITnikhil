import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import { useSelector } from "react-redux";
import Container from "./Container";
import axios from "axios";
import { useState } from "react";
import { fourStemps, twoStemps } from "../../api/config";

function MusicCardContainer() {
    const { playlists } = useSelector(state => state.musicReducer);
    let [twostemps, settwostemps] = useState([]);

    const sencondstemps = (c) => {
        axios(
            {
                url: `${twoStemps}${c}`,
                method: 'get',
                headers: {
                    "Content-type": "multipart/form-data",
                }
            }
        ).then((res) => {
            console.log(res);
            settwostemps(res.data.getSong);
        }).catch((err) => {
            console.log(err);
        })
    }
    const fourstemps = (c) => {
        axios(
            {
                url: `${fourStemps}${c}`,
                method: 'get',
                headers: {
                    "Content-type": "multipart/form-data",
                }
            }
        ).then((res) => {
            console.log(res);
            settwostemps(res.data.getSong);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <Container>
            <div>
                {/* {
                    playlists.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                } */}
                <div >
                    <div class="dropdown m-5" style={{ display: 'inline' }} >
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            2 Stems
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><p class="dropdown-item" onClick={() => sencondstemps("Vocals")} >Vocals</p></li>
                            <li><p class="dropdown-item" onClick={() => sencondstemps("Accompaniment")} >Accompaniment</p></li>
                        </ul>
                    </div>

                    <div class="dropdown m-5" style={{ display: 'inline' }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            4 Stems
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><p class="dropdown-item " onClick={() => fourstemps("Vocals")}>Vocals</p></li>
                            <li><p class="dropdown-item" onClick={() => fourstemps("Drums")} >Drums</p></li>
                            <li><p class="dropdown-item" onClick={() => fourstemps("Bass")} >Bass</p></li>
                            <li><p class="dropdown-item" onClick={() => fourstemps("Other")}>Other</p></li>
                        </ul>
                    </div>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    {twostemps.map((value, index) => {
                        return (
                            <>
                                <div style={{ width: '800px', height: '54px', background: 'cyan ', margin: '10px', float: 'left' }}>
                                    <div key={index}>
                                        <img src={value.imageName} alt="/" style={{ width: '100px', height: '54px', float: 'left' }} />
                                    </div>
                                    <div style={{ height: '55px', float: 'left', borderRadius: "0px" }}>
                                        <audio controls style={{ backgroundColor: "#C8C8C8" }}>
                                            <source src={value.music} type="audio/ogg" />
                                        </audio>
                                    </div >
                                    <div style={{ float: 'left', width: '200px', height: '54px' }}>
                                        <h5 style={{ textAlign: 'center',lineHeight:'54px'}} >{value.trackTitle}</h5>
                                    </div>
                                    <div style={{ float: 'left', textAlign: 'center',lineHeight:"54px", width: '200px', height: '54px' }}>
                                        <p>{value.trackType}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}</div>

            </div>
        </Container>
    );
}

export default MusicCardContainer;
