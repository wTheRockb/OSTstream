import {Album} from "../types/Album";
import axios from 'axios';
import {DEFAULT_AXIOS_CONFIG} from "./index";
import {ApiClient} from "../types/ApiClient";


export const PATHS = Object.freeze({
  GET_ALBUMS: "/api/albums"
});

const getAlbums = (): Promise<Album[]> => {
  const url = `/${PATHS.GET_ALBUMS}`;

  return axios
    .get(url, DEFAULT_AXIOS_CONFIG)
    .then(response => response.data.data as Album[]);
};



const BackendApiClient: ApiClient = Object.freeze({
  getAlbums,
});

export default BackendApiClient;