import {Album} from "./Album";

export interface ApiClient {
  readonly getAlbums: () => Promise<Album[]>;
}