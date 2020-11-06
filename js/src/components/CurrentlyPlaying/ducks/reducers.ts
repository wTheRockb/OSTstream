import { OstStreamAction } from 'src/types/Index';
import { Track } from 'src/types/Track';
import { ADD_SONGS_TO_QUEUE, SET_CURRENTLY_PLAYING } from './actions';

export interface CurrentlyPlayingReducerState {
    readonly currentlyPlaying?: Track;
    readonly queue: Track[];
}

export const currentlyPlayingInitialState: CurrentlyPlayingReducerState = {
    queue: [],
}

export const CurrentlyPlayingReducer = (
    state: CurrentlyPlayingReducerState = currentlyPlayingInitialState,
    action: OstStreamAction,
): CurrentlyPlayingReducerState => {
    switch (action.type) {
        case ADD_SONGS_TO_QUEUE:
            return {
                ...state,
                queue: state.queue.concat(action.payload.songs),
            }
        case SET_CURRENTLY_PLAYING:
            return {
                ...state,
                currentlyPlaying: action.payload.song,
            }

        default:
            return state;
    }
}
