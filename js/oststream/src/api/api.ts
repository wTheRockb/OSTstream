import { Album } from "../types/Album";
import axios from "axios";
import { DEFAULT_AXIOS_CONFIG } from "./index";
import { ApiClient } from "../types/ApiClient";
import { AlbumDetails } from "src/types/AlbumDetails";

const ROOT_BACKEND_PATH = "http://127.0.0.1:8000";
export const PATHS = Object.freeze({
  GET_ALBUMS: "albums"
});

const getAlbums = async (): Promise<Album[]> => {
  const url = `/${PATHS.GET_ALBUMS}`;

  const response = await axios.get(url, DEFAULT_AXIOS_CONFIG);
  return response.data as Album[];
};

const getAlbumDetails = async (albumId: number): Promise<AlbumDetails> => {
  const url = `${ROOT_BACKEND_PATH}/${PATHS.GET_ALBUMS}/${albumId}`;

  const response = await axios.get(url, DEFAULT_AXIOS_CONFIG);
  return response.data as AlbumDetails;
};

const BackendApiClient: ApiClient = Object.freeze({
  getAlbums,
  getAlbumDetails
});

export default BackendApiClient;
