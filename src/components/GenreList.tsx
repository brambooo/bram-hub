import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../models/genre';

interface Props {
    // Callback function
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;

    // TODO: Refactor to Skeleton
    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize={'lg'}>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList