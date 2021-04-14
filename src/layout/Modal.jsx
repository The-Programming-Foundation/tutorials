import React from 'react'

const Modal = ({ playBootup }) => {
    return (
        <div className='modal-learn'>
            <button className='modal-btn' type='button' onClick={playBootup}>Start your journey</button>

        </div>
    )
}

export default Modal
