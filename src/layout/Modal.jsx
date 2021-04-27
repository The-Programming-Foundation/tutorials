import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ playMusic, showModal }) => {

    return (
        <>
            {showModal && (
                // display modal when showModal state is true
                <div className="modal-overlay">
                    <div className="sound-modal">
                        <button type='button' aria-label='close' className='icons icon-x' onClick={playMusic}><AiOutlineClose /></button>
                        <h4>Hello there!</h4>
                        <p>Welcome to Learn. We currently have three domains: Operating Systems, Programming, and Logic.
                            Some of them provide interactive environments as you learn and explore them.</p>
                        <div className="modal-buttons flex flex-between">
                            <button
                                className='modal-btn'
                                aria-label='start music and close modal'
                                onClick={playMusic}
                            >
                                Let's go!
                                </button>
                            <button
                                className='modal-btn'
                                aria-label='redirect to donate page and start music'
                                name='donate'
                                onClick={playMusic}
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

export default Modal