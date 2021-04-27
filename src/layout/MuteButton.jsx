import React, { useState, useEffect } from 'react';
import { GoUnmute, GoMute } from 'react-icons/go';
import useSound from 'use-sound';
import learnSound from '../music/learn-sound.mp3';
import Modal from './Modal';

const MuteButton = ({ showModal, toggleModal }) => {

    const [play, { stop }] = useSound(learnSound);
    const [musicIsPlaying, setMusicIsPlaying] = useState(false);

    const playMusic = (e) => {
        play();
        setMusicIsPlaying(true);
        if (showModal) {
            toggleModal();
        }
        if (e.target.name === 'donate') {
            window?.open('https://www.theprogrammingfoundation.org/donate', '_blank');
        }
    };

    const pauseMusic = () => {
        stop();
        setMusicIsPlaying(false);
    }

    return (
        <>
            < Modal showModal={showModal} playMusic={playMusic} />
            {
                musicIsPlaying ? (
                    <div className='modal-learn' >
                        {/* Display mute/unmute buttons when music is playing */}
                        < button type='button' className='mute-btn' onClick={pauseMusic
                        }> Mute < GoMute /> </button >
                    </div >
                ) : (
                    <div className='modal-learn'>
                        <button type='button' className='mute-btn' onClick={playMusic
                        }>Unmute <GoUnmute /> </button>
                    </div>
                )
            }
        </>
    )
}

export default MuteButton;