import React from 'react';
// import useSound from 'use-sound';
// import bootup from '../music/bootup.mp3';
import { FaPlay, FaStop } from "react-icons/fa";



const Player = ({ play, stop, isPlaying }) => {



    return (
        <>
            <button
                type='button'
                aria-label='player button'
                className='icons play-btn'
                onClick={() => {
                    !isPlaying ?
                        (play()) : (stop())
                }}>{!isPlaying ? (<FaPlay />) : (<FaStop />)}
            </button>
        </>
    )
}

export default Player;
