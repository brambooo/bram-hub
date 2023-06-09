import { Platform } from "./platform";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]; // API design smell
    metacritic: number;
    rating_top: number;
}