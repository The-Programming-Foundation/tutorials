import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import  '../style/style.css'
import 'react-h5-audio-player/lib/styles.css'
import '../style/style.css'
import bensound from '../music/bensound-pianomoment.mp3';

/* https://www.bensound.com*/
export default() => {
    return (
    <Container fluid style={{padding:"5 15 0 15" }} >
        <Row className="row_player">
            <Col>
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
           </Col>
        </Row>
    </Container>
    )
}
