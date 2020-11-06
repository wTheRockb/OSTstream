import { Album } from "../types/Album";
import axios from "axios";
import { DEFAULT_AXIOS_CONFIG } from "./index";
import { ApiClient } from "../types/ApiClient";
import { AlbumDetails } from "src/types/AlbumDetails";

const ROOT_BACKEND_API_PATH = "http://127.0.0.1:8000/api";
export const PATHS = Object.freeze({
  GET_ALBUM: "albums",
  GET_ALBUM_CLOSEUP: "album-close-up"
});

const getAlbums = async (): Promise<Album[]> => {
  const url = `${ROOT_BACKEND_API_PATH}/${PATHS.GET_ALBUM}`;

  const response = await axios.get(url, DEFAULT_AXIOS_CONFIG);
  return response.data as Album[];
};

const getAlbumCloseUp = async (albumId: number): Promise<AlbumDetails> => {
  const url = `${ROOT_BACKEND_API_PATH}/${PATHS.GET_ALBUM_CLOSEUP}/${albumId}`;

  const response = await axios.get(url, DEFAULT_AXIOS_CONFIG);
  return response.data as AlbumDetails;
};

const BackendApiClient: ApiClient = Object.freeze({
  getAlbums,
  getAlbumCloseUp
});

export default BackendApiClient;
