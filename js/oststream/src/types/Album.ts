export interface Album {
  readonly id: number;
  readonly name: string;
  readonly gameId: number;
  readonly publishDate?: string; // TODO change to date?
  readonly imageUri: string;
}
