import React from 'react'
import useGenres from '../hooks/UseGenres'

const GenreList = () => {
    const genres = useGenres();

    console.log(genres);

    return (
        <div>GenreList</div>
    )
}

export default GenreList