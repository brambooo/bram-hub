import { Genre } from "../genre";

export interface FetchGenreResponse {
    count: number;
    results: Genre[];
}
