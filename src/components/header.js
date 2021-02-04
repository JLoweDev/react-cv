import { FaGithub } from 'react-icons/fa'

const Header = ({ title, github }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <a href={github}><FaGithub /></a>
        </header>
    )
}

export default Header
