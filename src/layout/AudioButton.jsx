import React, { useState, useEffect, useRef } from 'react';
import { GoUnmute, GoMute } from 'react-icons/go';
import learnSound from '../music/learn-sound.mp3';
import Modal from './Modal';

const AudioButton = ({ showModal, toggleModal }) => {

    if (typeof Audio != "undefined") {
        // browser-pnly code to enable server-side compiling
        var audio = new Audio(learnSound);
    }

    const audioRef = useRef(audio);
    const [isPlaying, setIsPlaying] = useState(false);

    // start music when user click on initial modal
    const modalPlayMusic = (e) => {
        audioRef.current.play();

        setIsPlaying(true);
        if (showModal) {
            toggleModal();
        }
        if (e.target.name === 'donate') {
            window?.open('https://www.theprogrammingfoundation.org/donate', '_blank');
        }
    };

    // play or pause music upon click with the isPlaying state as a trigger 
    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

    // pause music when changing to another page
    useEffect(() => {
        // Pause music on unmount
        return () => {
            audioRef.current.pause();
        }
    }, []);

    return (
        <>
            < Modal showModal={showModal} PlayMusic={modalPlayMusic} />
            {
                isPlaying ? (
                    <div className='modal-learn' >
                        {/* Display mute/unmute buttons when music is playing */}
                        < button type='button' className='mute-btn' onClick={() => setIsPlaying(false)
                        }> Mute < GoMute /> </button >
                    </div >
                ) : (
                    <div className='modal-learn'>
                        <button type='button' className='mute-btn' onClick={() => setIsPlaying(true)
                        }>Unmute <GoUnmute /> </button>
                    </div>
                )
            }
        </>
    )
}

export default AudioButton;