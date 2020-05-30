import { Track } from './Track';

export interface AlbumDetails {
    readonly id: number;
    readonly title: string;
    readonly gameId: number;
    readonly publishDate?: string; // TODO change to date?
    readonly imageUri: string;
    readonly tracks: Track[];
}
