import {createModel} from '@rematch/core';

export const editorModel = createModel({
    state: [],
    reducers: {
        editor: (state, id, payload) => {
            return {...state, [id]: payload}
        },
        destroyEditor: (state, id) => {
            return state.filter(editor => editor.id !== id)
        }
    }
});