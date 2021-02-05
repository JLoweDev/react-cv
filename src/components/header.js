import { FaGithub } from 'react-icons/fa'

const Header = ({ title, github }) => {
    return (
        <header className='fixed w-full z-30 top-0 text-black'>
            <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <a href={github} className='text-3xl'><FaGithub /></a>
            </div>
        </header>
    )
}

export default Header
