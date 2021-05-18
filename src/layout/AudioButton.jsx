import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from '@reach/router';
import { GoUnmute, GoMute } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import sounds from '../utils/sounds';

const AudioButton = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    // accessing global state redux rematch
    const audioModel = useSelector(state => state.audioModel);
    const { audioIsPlaying, easeOutMusic } = audioModel;
    const dispatch = useDispatch();

    // SSR method for accessing window.location 
    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);

    // current sound based on currentURL
    const currentSound = sounds(pathname);
    const soundRef = useRef(sounds(pathname));

    const [sound, setSound] = useState(sounds(soundRef.current));
    const changeSound = useCallback(() => {
        dispatch.audioModel.pause();
        setSound(currentSound);
    }, [currentSound, dispatch.audioModel]);

    if (typeof Audio != "undefined") {
        // browser-only code to enable server-side compiling
        var audio = new Audio(sound);
        // enable continuous sound
        audio.loop = true;
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

    const playMusic = useCallback(() => {
        dispatch.audioModel.toggle();
        audioRef.current.play();
    }, [dispatch.audioModel]);

    const pauseMusic = () => {
        dispatch.audioModel.toggle();
        audioRef.current.pause();
    }

    // pathname useEffect
    useEffect(() => {
        setPathname(location.pathname);
    }, [location, pathname]);

    // pause current music when navigating to another section
    useEffect(() => {
        if (audioIsPlaying && sound !== currentSound) {
            changeSound();
            audioRef.current.src = currentSound;
            audioRef.current.load();
            dispatch.audioModel.toggle();
            audioRef.current.pause();
        }
    }, [soundRef, sound, currentSound, audioIsPlaying, changeSound, dispatch.audioModel])

    // play new music when navigating to another section
    useEffect(() => {
        if (!audioIsPlaying && soundRef.current !== currentSound) {
            soundRef.current = currentSound;
            playMusic();
        }
    }, [sound, currentSound, audioIsPlaying, easeOutMusic, playMusic])

    // displaying modal only during the user's first visit to site
    useEffect(() => {
        let modalViewed = Number(localStorage.getItem('modalViewed')) || 0;
        if (modalViewed === 0) {
            toggleModal();
            localStorage.setItem('modalViewed', 1);
        }
    });

    return (
        <>
            < Modal showModal={showModal} playMusic={modalPlayMusic} />
            {
                audioIsPlaying ? (
                    <div className='modal-learn' >
                        {/* Display mute/unmute buttons when music is playing */}
                        < button type='button' className='mute-btn' onClick={
                            () => pauseMusic()
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