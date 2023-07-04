import { Genre } from "../models/genre";
import useData from "./useData";

//Abstract API info in this hook from consumer
const useGenres = () => useData<Genre>('/genres');

export default useGenres;