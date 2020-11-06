export interface Album {
    readonly id: number;
    readonly title: string;
    readonly gameId: number;
    readonly publishDate?: string; // TODO change to date?
    readonly imageUri: string;
}
