import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    console.log(data);

    return (
        <div>GenreList</div>
    )
}

export default GenreList