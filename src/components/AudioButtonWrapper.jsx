import React from 'react';
import AudioButton from '../layout/AudioButton'

const AudioButtonWrapper = ({ children }) => {
    return (
        <>
            <AudioButton />
            {children}
        </>
    )
}

export default AudioButtonWrapper;
