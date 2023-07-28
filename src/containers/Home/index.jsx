import { ButtonRed, ButtonWhite } from '../../components/Button/styles'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getMovies, getPopularSeries, getTopMovies, getTopPeople } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButton } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect (() => {
        async function getAllData() {
            setMovie(await getMovies())
            setTopMovies(await getTopMovies())
            setTopSeries(await getAllData())
            setPopularSeries(await getPopularSeries())
            setTopPeople(await getTopPeople())

        }
        getAllData()

    }, [])

    return (
        <>
        { movie && ( 
        <Background img={getImages(movie.backdrop_path)}>
           {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
            <Container>
                <Info>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <ContainerButton>
                    <ButtonRed onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista o filme</ButtonRed>
                    <ButtonWhite onClick={() => setShowModal(true)}>Assista o trailer</ButtonWhite>
                </ContainerButton>
                </Info>
                <Poster>
                    <img alt='capa-do-filme' src={getImages(movie.poster_path)}/>
                </Poster>
            </Container>
        </Background>
        )}
        {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        {topSeries && <Slider info={topSeries} title={'Top Series'} />}
        {popularSeries && <Slider info={popularSeries} title={'Series Populares'} />}
        {topPeople && <Slider info={topPeople} title={'Artistas Populares'} />}
        </>
    )
}

export default Home