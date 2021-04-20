import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GoUnmute, GoMute } from 'react-icons/go';



const Modal = ({ onPlay, play, stop, isPlaying, showModal }) => {
    return (
        <>
            {!showModal ? (
                <div className='modal-learn'>
                    {/* Display mute/unmute buttons when music is playing */}
                    {isPlaying ? (
                        <button type='button' className='mute-btn' onClick={() => stop()}>Mute <GoMute /> </button>
                    ) : (
                        <button type='button' className='mute-btn' onClick={() => play()}>Unmute <GoUnmute /> </button>
                    )}
                </div>
            ) : (
                // display modal when showModal state is true
                <div className="modal-overlay">
                    <div className="sound-modal">
                        <button type='button' aria-label='close' className='icons icon-x' onClick={onPlay}><AiOutlineClose /></button>
                        <h4>Hello there!</h4>
                        <p>Welcome to Learn. We currently have three domains: Operating Systems, Programming, and Logic.
                            Some of them provide interactive environments as you learn and explore them.</p>
                        <div className="modal-buttons flex flex-between">
                            <button
                                className='modal-btn'
                                aria-label='start music and close modal'
                                onClick={onPlay}
                            >
                                Let's go!
                                </button>
                            <button
                                className='modal-btn'
                                aria-label='redirect to donate page and start music'
                                name='donate'
                                onClick={onPlay}
                            >
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;