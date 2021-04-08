import React from 'react'
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css'
import '../style/style.css'
import bensound from '../music/bensound-pianomoment.mp3';

/* https://www.bensound.com*/
export default() => {
    return (
        <AudioPlayer
            className="player"
            src={bensound}
            showJumpControls={false}
            layout="stacked"
            customProgressBarSection={[]}
            customControlsSection={["MAIN_CONTROLS"]}
            autoPlayAfterSrcChange ={[false]}
            autoPlay = {[true]}
            togglPlay
        />
    )
}
