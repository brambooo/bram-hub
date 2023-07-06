import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../models/game";
import PlatformIconList from './PlatformIconList';
import CriticScore from "./CriticScore";

import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} objectFit='cover' />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /></Heading>

            </CardBody>
        </Card>
    )
}

export default GameCard