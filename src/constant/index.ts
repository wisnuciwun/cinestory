const API_GET_MOVIES = 'https://www.omdbapi.com/?apikey=9708f5ab&s=Batman&page=1'

export type DetailRatings = {
     Source: string
     Value: string
}

export type MovieDetailResponse = {
     Actors: string
     Awards: string
     BoxOffice: string
     Country: string
     DVD: string
     Director: string
     Genre: string
     Language: string
     Metascore: string
     Plot: string
     Poster: string
     Production: string
     Rated: string
     Ratings: DetailRatings[]
     Released: string
     Response: string
     Runtime: string
     Title: string
     Type: string
     Website: string
     Writer: string
     Year: string
     imdbID: string
     imdbRating: string
     imdbVotes: string
}

export interface MovieResponse {
     Poster: string;
     Title: string;
     Type: string;
     Year: string;
     imdbID: string;
}

export type MoviesResponse = {
     Response: string;
     Search: MovieResponse[];
     totalResult: string;

}

export { API_GET_MOVIES }