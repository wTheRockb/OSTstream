import { GenericOstStreamAction } from 'src/types/Index';
import { Track } from 'src/types/Track';

export const ADD_SONGS_TO_QUEUE = 'app/currentlyPlaying/addSongsToQueue';
export const SET_CURRENTLY_PLAYING = 'app/currentlyPlaying/setCurrentlyPlaying';

interface AddSongsToQueuePayload {
    readonly songs: Track[];
}

interface SetCurrentlyPlayingPayload {
    readonly song: Track;
}

const addSongsToQueue = (
    payload: AddSongsToQueuePayload,
): GenericOstStreamAction<typeof ADD_SONGS_TO_QUEUE, AddSongsToQueuePayload> => ({
    type: ADD_SONGS_TO_QUEUE,
    payload,
})

const setCurrentlyPlaying = (
    payload: SetCurrentlyPlayingPayload,
): GenericOstStreamAction<typeof SET_CURRENTLY_PLAYING, SetCurrentlyPlayingPayload> => ({
    type: SET_CURRENTLY_PLAYING,
    payload,
})

export type CurrentlyPlayingAction =
    | ReturnType<typeof setCurrentlyPlaying>
    | ReturnType<typeof addSongsToQueue>;

export default {
    ADD_SONGS_TO_QUEUE,
    addSongsToQueue,
    SET_CURRENTLY_PLAYING,
    setCurrentlyPlaying,
}