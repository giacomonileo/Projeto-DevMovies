/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState} from 'react'
import { Container, Background } from './styles'
import { getMovieVideo } from '../../services/getData'

function Modal({ movieId, setShowModal}) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideo(movieId))
        }
         getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
            <Container>
                <button>X</button>
                <iframe
                    src={`https://www.youtube.com/embed/${movie.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                ></iframe>
            </Container>
            )}
        </Background>
    )
}

export default Modal