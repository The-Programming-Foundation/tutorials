import React, {useRef, useEffect} from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
//need to implement dynamic imports
import "ace-builds/src-noconflict/mode-python";

import {useSelector, useDispatch} from 'react-redux';


export default function CodeEditor(props){
    const {id, minimize, language} = props;
    let isDark = useRef(true);
    let isDisplayed = useRef(minimize);

    const editorModel = useSelector((state) => state.editorModel);
    const dispatch = useDispatch();
    
    useEffect(() => {
        isDark.current = editorModel[id] && editorModel[id].isDark;
        isDisplayed.current = editorModel[id] && editorModel[id].isDisplayed;

        if (editorModel[id] === undefined) {
            // dispatch.editorModel.editor(props.id, { code: "", isDisplayed: minimize, isDark: true,})
        }
    });
    
    const handleMinimize = () => {
        dispatch.editorModel.editor(props.id, {isDisplayed: !isDisplayed.current});
    }

    function getContent(currentValue){
        // setCode(JSON.stringify(currentValue));
    }

    return(
        <React.Fragment>
            {isDisplayed ? <button onClick={handleMinimize}>Minimize</button> : ''}
            <input
                type="checkbox"
                id="theme"
                checked={isDark.current}
            />
            <label for="theme">Dark Mode</label>
            <button onClick={() => dispatch.editorModel.editor(props.id, {code: "Hello world"})}>Save Editor</button>
            <AceEditor
                style={{display: isDisplayed.current ? 'block' : 'none'}}
                mode={language}
                theme={isDark.current ? 'monokai' : 'tomorrow'}
                onChange={getContent}
            />
        </React.Fragment>
  );
}