import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { Genre } from "../models/genre";
import apiClient from "../services/api-client";
import { FetchGenreResponse } from "../models/api/fetch-genre-response";

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchGenreResponse>('/genres')
            .then(res => {
                setLoading(false);
                setGenres(res.data.results);
            })
            .catch(err => {
                if (error instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            }
            );

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading }
};

export default useGenres;