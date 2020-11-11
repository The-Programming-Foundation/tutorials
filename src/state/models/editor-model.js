import {createModel} from '@rematch/core';

export const editorStorage = createModel({
    state: [],
    reducers: {
        addEditor: (state, code) => {
            if(state.length === 0){
                let id = 0;
                return [...state, {editorId: id, content: code}];
            }
            let newId = state[state.length -1].editorId + 1;
            return [...state, {editorId: newId, content: code}];
        },
        destroyEditor: (state, id) => {
            return state.filter(editor => editor.id !== id)
        }
    }
});