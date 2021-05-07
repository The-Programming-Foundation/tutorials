import React, { useState, useEffect, useRef } from 'react';
import { GoUnmute, GoMute } from 'react-icons/go';
import learnSound from '../music/learn-sound.mp3';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';

const AudioButton = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    // accessing global state redux rematch
    const audioModel = useSelector(state => state.audioModel);
    const { audioIsPlaying, easeOutMusic } = audioModel;
    const dispatch = useDispatch();


    if (typeof Audio != "undefined") {
        // browser-only code to enable server-side compiling
        var audio = new Audio(learnSound);
    }

    const audioRef = useRef(audio);

    // start music when user click on initial modal
    const modalPlayMusic = (e) => {
        audioRef.current.play();
        dispatch.audioModel.toggle();
        if (showModal) {
            toggleModal();
        }
        if (e.target.name === 'donate') {
            window?.open('https://www.theprogrammingfoundation.org/donate', '_blank');
        }
    };

    const playMusic = () => {
        dispatch.audioModel.toggle();
        audioRef.current.play();
    }

    const pauseMusic = useRef(null);
    const [vol, setVol] = useState(1);

    // displaying modal only during the user's first visit to site
    useEffect(() => {
        let modalViewed = Number(localStorage.getItem('modalViewed')) || 0;
        if (modalViewed === 0) {
            toggleModal();
            localStorage.setItem('modalViewed', 1);
        }
    });

    // fading out music on pause
    useEffect(() => {
        if (easeOutMusic === true) {
            // referencing the current instance of pause music when setTimeout makes an update
            pauseMusic.current = vol > 0.1 && setTimeout(() => {
                setVol(vol - 0.05);
                audioRef.current.volume = vol;
            }, 100);
        }
        return () => {
            clearTimeout(pauseMusic.current);
        }
    }, [vol, easeOutMusic]);

    useEffect(() => {
        if (vol < 0.1) {
            dispatch.audioModel.pause();
            dispatch.audioModel.toggle();
            audioRef.current.pause();
            setVol(1);
        }
    }, [vol, dispatch.audioModel]);

    return (
        <>
            < Modal showModal={showModal} playMusic={modalPlayMusic} />
            {
                audioIsPlaying ? (
                    <div className='modal-learn' >
                        {/* Display mute/unmute buttons when music is playing */}
                        < button type='button' className='mute-btn' onClick={
                            () => { dispatch.audioModel.pause() }
                        }> Mute < GoMute /> </button >
                    </div >
                ) : (
                    <div className='modal-learn'>
                        <button type='button' className='mute-btn' onClick={
                            () => playMusic()
                        }>Unmute <GoUnmute /> </button>
                    </div>
                )
            }
        </>
    )
}

export default AudioButton;