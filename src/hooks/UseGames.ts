import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Game } from "../models/game";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => {
                setLoading(false);
                setGames(res.data.results);
            })
            .catch(err => {
                if (error instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            }
            );

        return () => controller.abort();
    }, []);

    return { games, error, isLoading }
}

export default useGames;