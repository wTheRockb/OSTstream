import { GenericOstStreamAction } from 'src/types/Index';
import { Track } from 'src/types/Track';

export const ADD_SONGS_TO_QUEUE = 'app/currentlyPlaying/addSongsToQueue';

interface AddSongsToQueuePayload {
    readonly songs: Track[];
}

const addSongsToQueue = (
    payload: AddSongsToQueuePayload,
): GenericOstStreamAction<typeof ADD_SONGS_TO_QUEUE, AddSongsToQueuePayload> => ({
    type: ADD_SONGS_TO_QUEUE,
    payload,
})

export type CurrentlyPlayingAction =
    | ReturnType<typeof addSongsToQueue>;

export default {
    ADD_SONGS_TO_QUEUE,
    addSongsToQueue
}