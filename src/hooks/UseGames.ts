import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (error instanceof CanceledError) return;
                setError(err.message)
            }
            );

        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames;