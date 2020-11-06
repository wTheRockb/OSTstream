export interface Track {
    readonly id: number;
    readonly title: string;
    readonly artist: string;
    readonly albumId: number;
    readonly uri: string;
    readonly length: number;
}
