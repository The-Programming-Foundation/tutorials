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
    // check for path changes
    const [pathChanged, setPathChagned] = useState(false);

    const [sound, setSound] = useState(sounds(soundRef.current));

    // memoizing changeSound function
    const changeSound = useCallback(() => {
        // dispatch.audioModel.pause();
        setSound(currentSound);
        console.log('change sound', currentSound.slice(7, 20));
    }, [currentSound]);

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
        console.log('playing Music')
    }, [dispatch.audioModel, audioIsPlaying]);


    // fadeout sound when pausing music
    const [vol, setVol] = useState(1);
    useEffect(() => {
        let current = audioRef.current;
        let fadeout;
        if (!!easeOutMusic) {
            fadeout = vol > 0.01 && setInterval(() => {
                setVol(v => (v - 0.1).toFixed(2));
                current.volume = vol;
                console.log('current.vol from setInterval', current.volume)
            }, 100);
        }
        return () => {
            clearTimeout(fadeout);
        }
    }, [easeOutMusic, vol]);

    // pause after volume reached 0.01
    useEffect(() => {
        if (vol <= 0.01) {
            dispatch.audioModel.pause();
            dispatch.audioModel.toggle();
            audioRef.current.pause();
            setVol(1);
            audioRef.current.volume = 1;
            console.log('reached 0', vol);
        }
    }, [vol, dispatch.audioModel]);

    // pathname useEffect
    useEffect(() => {
        setPathname(location.pathname);
        setPathChagned(true);
        console.log(pathChanged, 'path changed eff')
    }, [location, pathname, pathChanged]);

    // change current music when navigating to another section
    useEffect(() => {
        if (audioIsPlaying && sound !== currentSound) {
            changeSound();
            audioRef.current.src = currentSound;
            // audioRef.current.load();
            // audioRef.current.pause();
            dispatch.audioModel.pause();
            // ensure audioIsplaying true
            // dispatch.audioModel.toggle();
            console.log('easeout nav eff=', easeOutMusic, "playing=", audioIsPlaying);
        }
    }, [soundRef, sound, currentSound, audioIsPlaying, changeSound, dispatch.audioModel, easeOutMusic])

    // play new music when navigating to another section
    useEffect(() => {
        if (!audioIsPlaying && soundRef.current !== currentSound) {
            soundRef.current = currentSound;
            // dispatch.audioModel.toggle();
            console.log(soundRef.current.slice(7, 20), vol, easeOutMusic, "after switch=", audioIsPlaying, "==audioPlay",
                '\n', pathChanged, 'pathchange');

            playMusic();

        }
    }, [sound, currentSound, audioIsPlaying, easeOutMusic, playMusic, vol, pathChanged]);

    // ================== test ========================
    // useEffect(() => {
    //     if (!easeOutMusic && audioIsPlaying && pathChanged) playMusic();
    //     setPathChagned(!pathChanged);
    // }, pathChanged, audioIsPlaying, easeOutMusic);

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