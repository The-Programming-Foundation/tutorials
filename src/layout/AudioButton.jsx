// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useLocation } from '@reach/router';
// import { GoUnmute, GoMute } from 'react-icons/go';
// import { useSelector, useDispatch } from 'react-redux';
// import Modal from './Modal';
// import sounds from '../utils/sounds';

// const AudioButton = () => {

//     const [showModal, setShowModal] = useState(false);
//     const toggleModal = () => setShowModal(!showModal);

//     // accessing global state redux rematch
//     const audioModel = useSelector(state => state.audioModel);
//     const { audioIsPlaying, easeOutMusic } = audioModel;
//     const dispatch = useDispatch();

//     // Hook for accessing window.location 
//     const { pathname } = useLocation();
//     const [urlName, setUrlName] = useState(pathname);

//     // state for capturing navigation changes
//     const [pathChanged, setPathChanged] = useState(false);

//     // current sound to be played based on utils sounds function
//     const currentSound = sounds(urlName);

//     // compare sound playing vs sound to be played after navigating to another page
//     const [sound, setSound] = useState(sounds(urlName));

//     const [muteClicked, setMuteClicked] = useState(false);

//     // memoizing changeSound function  
//     const changeSound = useCallback(() => {
//         setSound(currentSound);
//         // pause sound only if mute is not clicked
//         !muteClicked && dispatch.audioModel.pause();
//     }, [currentSound, dispatch.audioModel, muteClicked]);

//     // audio object
//     if (typeof Audio != "undefined") {
//         var audio = new Audio(sound);
//         audio.loop = true;
//     }
//     const audioRef = useRef(audio);

//     const modalPlayMusic = (e) => {
//         audioRef.current.play();
//         dispatch.audioModel.toggle();
//         if (showModal) {
//             toggleModal();
//         }
//         if (e.target.name === 'donate') {
//             window?.open('https://www.theprogrammingfoundation.org/donate', '_blank');
//         }
//     };

//     const playMusic = useCallback(() => {
//         !audioIsPlaying && dispatch.audioModel.toggle();
//         audioRef.current.play();
//         setPathChanged(false);
//         setMuteClicked(false);
//     }, [dispatch.audioModel, audioIsPlaying]);

//     const muteMusic = () => {
//         setMuteClicked(true);
//         dispatch.audioModel.pause();
//     };

//     // fadeout sound before pausing music
//     const [vol, setVol] = useState(1);
//     useEffect(() => {
//         let current = audioRef.current;
//         let fadeout;
//         if (!!easeOutMusic) {
//             fadeout = vol > 0.01 && setInterval(() => {
//                 setVol(v => (v - 0.1).toFixed(2));
//                 current.volume = vol;
//             }, 100);
//         }
//         return () => {
//             clearTimeout(fadeout);
//         }
//     }, [easeOutMusic, vol, pathChanged, muteClicked]);

//     // pause music once volume faded out
//     useEffect(() => {
//         if (vol <= 0.01 && !!easeOutMusic) {
//             dispatch.audioModel.pause();
//             audioRef.current.pause();
//             setVol(1);
//             audioRef.current.volume = 1;
//             dispatch.audioModel.toggle();
//             // change the actual audioRef src if the path has changed and fading out completed
//         } if (pathChanged && !easeOutMusic && !audioIsPlaying) {
//             audioRef.current.src = currentSound;
//             // play music after changing path and if mute hasn't been clicked
//         } if (pathChanged && !easeOutMusic && !audioIsPlaying && !muteClicked) {
//             playMusic();
//         }
//     }, [vol, dispatch.audioModel, pathChanged, audioIsPlaying, playMusic, currentSound, easeOutMusic, muteClicked]);

//     // change sound only when navigating to a different lesson with a dedicated sound
//     useEffect(() => {
//         if (urlName !== pathname) {
//             setUrlName(pathname);
//             setPathChanged(true);
//         } if (sound !== currentSound) {
//             changeSound();
//         }
//     }, [pathname, urlName, pathChanged, currentSound, changeSound, sound]);

//     // displaying modal only during the user's first visit to site
//     useEffect(() => {
//         let modalViewed = Number(localStorage.getItem('modalViewed')) || 0;
//         if (modalViewed === 0) {
//             toggleModal();
//             localStorage.setItem('modalViewed', 1);
//         }
//     });

//     return (
//         <>
//             < Modal showModal={showModal} playMusic={modalPlayMusic} />
//             {
//                 audioIsPlaying ? (
//                     <div className='modal-learn' >
//                         < button type='button' className='mute-btn' onClick={
//                             () => muteMusic()
//                         }> Mute < GoMute /> </button >
//                     </div >
//                 ) : (
//                     <div className='modal-learn'>
//                         <button type='button' className='mute-btn' onClick={
//                             () => playMusic()
//                         }>Unmute <GoUnmute /> </button>
//                     </div>
//                 )
//             }
//         </>
//     )
// }

// export default AudioButton;