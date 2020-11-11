import React, {useState} from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
//need to implement dynamic imports
import "ace-builds/src-noconflict/mode-python";

import {useSelector, useDispatch} from 'react-redux';


export default function CodeEditor(props){
    const editorStorage = useSelector((state) => state.editorStorage);
    const dispatch = useDispatch();
    const [code, setCode] = useState(null);
    const [checked, setChecked] = useState(true);
    const [display, setDisplay] = useState(true);
    const {minimize, language} = props;
    
    function handleMinimize(){
        setDisplay(!display);
    }

    function getContent(currentValue){
        setCode(JSON.stringify(currentValue));
    }

    return(
        <React.Fragment>
            {minimize ? <button onClick={handleMinimize}>Minimize</button> : ''}
            <input
                type="checkbox"
                id="theme"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <label for="theme">Dark Mode</label>
            <button onClick={() => dispatch.editorStorage.addEditor(code)}>Save Editor</button>
            <AceEditor
                style={{display: display ? 'block' : 'none'}}
                mode={language}
                theme={checked ? 'monokai' : 'tomorrow'}
                onChange={getContent}
            />
        </React.Fragment>
  );
}