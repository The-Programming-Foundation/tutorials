import React from 'react';
import Player from '../components/Player';
import { GrClose } from 'react-icons/gr';



const Modal = ({ onToggle, showModal, play, stop, isPlaying }) => {
    return (
        <>
            {!showModal ? (
                <div className='modal-learn'>
                    <button type='button' className='modal-btn' onClick={onToggle}>Start</button>
                </div>
            ) : (
                <div className="modal-overlay">
                    <div className="sound-modal">
                        <button type='button' aria-label='close' className='icons icon-x' onClick={onToggle}><GrClose /></button>
                        <h4>Let's start our journey</h4>
                        <Player play={play} stop={stop} isPlaying={isPlaying} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;