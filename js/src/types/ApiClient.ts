import { Album } from "./Album";
import { AlbumDetails } from "./AlbumDetails";

export interface ApiClient {
  readonly getAlbums: () => Promise<Album[]>;
  readonly getAlbumCloseUp: (albumId: number) => Promise<AlbumDetails>;
}
