import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosPhonePortrait } from '@react-icons/all-files/io/IoIosPhonePortrait';
import { IoIosPhoneLandscape } from '@react-icons/all-files/io/IoIosPhoneLandscape';
import { IoIosMoon } from '@react-icons/all-files/io/IoIosMoon';
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline';
import { BiExpand } from '@react-icons/all-files/bi/BiExpand';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import { CgUndo } from '@react-icons/all-files/cg/CgUndo';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
//Code Editor
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";

export default function EditorToolbar(){

    const buttonTheme = {
        colors: {
            main: "#404040",
            text: "#ffffff"
        },
        fonts: {
            body: "Poppins, sans-serif"
        },
        fontWeights: {
            body: 400,
            bold: 700
        },
        fontSizes: [14, 16, 24, 32, 48, 64, 72],
        width: [150, 200, 250, 300, 350, 400, 450, 500],
        spacing: [25, 35, 45]
    }

    const buttonStyle = {
        border: "none",
        backgroundColor: buttonTheme.colors.main,
        color: buttonTheme.colors.text,
        fontFamily: buttonTheme.fonts.body,
        fontWeight: buttonTheme.fontWeights.body,
        fontSize: buttonTheme.fontSizes[2],
        textAlign: "center",
        width: buttonTheme.width[3],
        marginBottom: buttonTheme.spacing[1]
    }

    const iconStyle = {
        fontSize: buttonTheme.fontSizes[4],
        display: "inline-table"
    }

    const buttonIconStyle = {
        display: "inline-flex"
    }

    const [positionMode, setPositionMode] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const handlePositionChange = () => {
        setPositionMode(!positionMode);
    }

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    }
    return(
        <div style={{backgroundColor: "#c4c4c4", padding: "25px"}}>
            <Container fluid>
                <Row className="d-flex justify-content-between">
                    <Col sm className="d-flex justify-content-center">
                        <Button style={buttonStyle}>Run{' '}<IoPlay /></Button>
                    </Col>
                    <Col sm className="d-flex justify-content-center">
                        <Button style={buttonStyle}>Reset{' '}<CgUndo /></Button>
                    </Col>
                    <Col sm className="d-flex justify-content-center">
                        <Button style={buttonStyle}>Get Help{' '}<IoIosArrowDown /></Button>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between">
                   <Col sm className="d-flex justify-content-start">
                        <div type="button" style={buttonIconStyle} onClick={handlePositionChange}>{positionMode? <IoIosPhonePortrait style={iconStyle} /> : <IoIosPhoneLandscape style={iconStyle}/>}</div>
                        <div type="button" style={buttonIconStyle} style={{marginLeft: "15px"}} onClick={handleThemeChange}>{darkMode? <IoIosMoon style={iconStyle} /> : <IoSunnyOutline style={iconStyle}/>}</div>
                    </Col>
                    <Col sm className="d-flex justify-content-end">
                        <BiExpand style={iconStyle}/>
                    </Col>
                </Row>
                {/* The following section has the code editor component included. Feel free to comment out when needed. */}
                {/* TODO: Update CodeEditor component to implement toolbar and its functionalities */}
                {/* TODO: Update useState to useRef */}
                <Row style={{marginTop: buttonTheme.spacing[1]}}>
                    <AceEditor theme={darkMode ? 'monokai' : 'tomorrow'} style={{width: "100%"}}></AceEditor>
                </Row>    
            </Container>            
        </div>
    )
}