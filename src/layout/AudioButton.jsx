import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from '@reach/router';
import { GoUnmute, GoMute } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import sounds from '../utils/sounds';

const AudioButton = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    const [muteClicked, setMuteClicked] = useState(false);

    // accessing global state redux rematch
    const audioModel = useSelector(state => state.audioModel);
    const { audioIsPlaying, easeOutMusic } = audioModel;
    const dispatch = useDispatch();

    // SSR method for accessing window.location 
    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);

    // current sound based on currentURL
    const currentSound = sounds(location.pathname);
    const soundRef = useRef(sounds(pathname));
    // check for path changes
    const [pathChanged, setPathChanged] = useState(false);

    // state to compare changes in sound source
    const [sound, setSound] = useState(sounds(soundRef.current));

    // memoizing changeSound function
    const changeSound = useCallback(() => {
        setSound(currentSound);
        soundRef.current = currentSound;
        !muteClicked && dispatch.audioModel.pause();
    }, [currentSound, dispatch.audioModel, muteClicked]);

    // instatiating the audio object
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
        !audioIsPlaying && dispatch.audioModel.toggle();
        audioRef.current.play();
        setPathChanged(false);
        setMuteClicked(false);
    }, [dispatch.audioModel, audioIsPlaying]);

    const muteMusic = () => {
        setMuteClicked(true);
        dispatch.audioModel.pause();
    };

    // fadeout sound when pausing music
    const [vol, setVol] = useState(1);
    useEffect(() => {
        let current = audioRef.current;
        let fadeout;
        if (!!easeOutMusic) {
            fadeout = vol > 0.01 && setInterval(() => {
                setVol(v => (v - 0.1).toFixed(2));
                current.volume = vol;
            }, 100);
        }
        return () => {
            clearTimeout(fadeout);
        }
    }, [easeOutMusic, vol, pathChanged, muteClicked]);

    // pause after volume reached 0.01
    useEffect(() => {
        if (vol <= 0.01 && !!easeOutMusic) {
            dispatch.audioModel.pause();
            audioRef.current.pause();
            setVol(1);
            audioRef.current.volume = 1;
            dispatch.audioModel.toggle();
        } if (pathChanged && !easeOutMusic && !audioIsPlaying) {
            audioRef.current.src = currentSound;
        } if (pathChanged && !easeOutMusic && !audioIsPlaying && !muteClicked) {
            playMusic();

        }
    }, [vol, dispatch.audioModel, pathChanged, audioIsPlaying, playMusic, currentSound, easeOutMusic, muteClicked]);

    // pathname useEffect
    useEffect(() => {
        if (pathname !== location.pathname) {
            setPathname(location.pathname);
            setPathChanged(true);
        } if (sound !== currentSound) {
            changeSound();
        }
    }, [location.pathname, pathname, pathChanged, currentSound, changeSound, sound]);

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
                            () => muteMusic()
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