import { API_KEY } from "./constants/constants"

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`

export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`

export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`

export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`

export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`

export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`

export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99&include_adult=false`

export const toprated = `movie/top_rated?api_key=${API_KEY}`

export const series = `discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`

export const nowplaying = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

export const malayalam = `search/movie?api_key=${API_KEY}&include_adult=false&query=malayalam`