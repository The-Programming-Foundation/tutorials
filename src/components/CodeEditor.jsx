import React, {useState, useEffect} from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
//need to implement dynamic imports
import "ace-builds/src-noconflict/mode-python";

import {useSelector, useDispatch} from 'react-redux';


export default function CodeEditor(props){
    const {id, minimize, language} = props;

    const editorModel = useSelector((state) => state.editorModel);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(editorModel[id]);
        if (editorModel[id] === undefined) {
            dispatch.editorModel.editor(props.id, { code: "", display: true, isDark: true,})
        }
    });
    
    function handleMinimize(){
        // setDisplay(!display);
    }

    function getContent(currentValue){
        // setCode(JSON.stringify(currentValue));
    }

    return(
        <React.Fragment>
            {minimize ? <button onClick={handleMinimize}>Minimize</button> : ''}
            <input
                type="checkbox"
                id="theme"
                checked={isDark}
            />
            <label for="theme">Dark Mode</label>
            <button onClick={() => dispatch.editorModel.editor(props.id, {code: "Hello world"})}>Save Editor</button>
            <AceEditor
                style={{display: editorModel[id].display ? 'block' : 'none'}}
                mode={language}
                theme={editorModel[id]['isDark'] ? 'monokai' : 'tomorrow'}
                onChange={getContent}
            />
        </React.Fragment>
  );
}