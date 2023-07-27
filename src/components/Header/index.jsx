import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'


function Header () {

    const { pathname} = useLocation()

    return(
        <Container>
            <img src={Logo} alt="logo" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header