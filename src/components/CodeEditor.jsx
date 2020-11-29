import React, {useRef, useEffect} from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/mode-python";
import {useSelector, useDispatch} from 'react-redux';

export default function CodeEditor(props){
    const {id, display, language} = props;
    const editorModel = useSelector((state) => state.editorModel[id]);
    const dispatch = useDispatch();

    let isDark = useRef(true);
    let isDisplayed = useRef(display);
    
    useEffect(() => {
        if (editorModel === undefined) {
            dispatch.editorModel.editor(props.id, { code: "", isDisplayed: display, isDark: true,});
        } 
    });
    
    const minimize = () => {
        isDisplayed.current = !editorModel.isDisplayed;
        dispatch.editorModel.editor(id, {...editorModel, isDisplayed: isDisplayed.current});
    }

    const switchTheme = () => {
        isDark.current = !editorModel.isDark;
        dispatch.editorModel.editor(id, {...editorModel, isDark: isDark.current});
    }

    // TODO: We can keep an eye on the preformace of this, possibly add an idel interval to dispatch
    const saveCode = (code) => {
        dispatch.editorModel.editor(id, {...editorModel, code: code});
    }

    return(
        <>
            {/* {isDisplayed ? <button onClick={minimize}>Minimize</button> : ''}
            <input
                type="checkbox"
                id={id + "-theme"}
                checked={isDark.current}
                onChange={switchTheme}
            />
            <label htmlFor={id + "-theme"}>Dark Mode</label> */}
            <AceEditor
                style={{display: isDisplayed.current ? 'block' : 'none'}}
                mode={language}
                theme={isDark.current ? 'monokai' : 'tomorrow'}
                onChange={saveCode}
            />
        </>
  );
}