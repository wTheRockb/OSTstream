import { Album } from "../types/Album";
import axios from "axios";
import { DEFAULT_AXIOS_CONFIG } from "./index";
import { ApiClient } from "../types/ApiClient";
import { AlbumDetails } from "src/types/AlbumDetails";

export const PATHS = Object.freeze({
  GET_ALBUMS: "/api/albums"
});

const getAlbums = (): Promise<Album[]> => {
  const url = `/${PATHS.GET_ALBUMS}`;

  return axios
    .get(url, DEFAULT_AXIOS_CONFIG)
    .then(response => response.data.data as Album[]);
};

const getAlbumDetails = (albumId: number): Promise<AlbumDetails> => {
  const url = `/${PATHS.GET_ALBUMS}/${albumId}}`;

  return axios
    .get(url, DEFAULT_AXIOS_CONFIG)
    .then(response => response.data.data as AlbumDetails);
};

const BackendApiClient: ApiClient = Object.freeze({
  getAlbums,
  getAlbumDetails
});

export default BackendApiClient;
