import { createModel } from '@rematch/core';

export const audioModel = createModel({
    state: {
        audioIsPlaying: false,
    },
    reducers: {
        toggle: (state) => {
            return {
                audioIsPlaying: !state.audioIsPlaying
            }
        }
    }
});