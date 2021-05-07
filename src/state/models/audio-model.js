import { createModel } from '@rematch/core';

export const audioModel = createModel({
    state: {
        audioIsPlaying: false,
        easeOutMusic: false,
    },
    reducers: {
        toggle: (state) => {
            return {
                ...state,
                audioIsPlaying: !state.audioIsPlaying
            }
        },

        pause: (state) => {
            return {
                ...state,
                easeOutMusic: !state.easeOutMusic

            }
        }
    }
});