import { Track } from "./Track";

export interface GlobalState {
    currentSong?: Track;
    songQueue: Track[];
}
