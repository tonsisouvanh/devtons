import { useContext } from 'react'

import { AiOutlineFolder, AiOutlineMessage } from 'react-icons/ai'
import { MdFaceRetouchingNatural } from 'react-icons/md'

import { Link } from 'react-router-dom'
import logoLight from '../assets/images/devtons-light.png'
import logoDark from '../assets/images/devtons-dark.png'
import ThemeToggle from './ThemToggle'

import { ThemeContext } from '../context/ThemeContext';

import { Link as ScrollLink } from 'react-scroll'


const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* Top Navbar Container */}
      <nav className='border-b bg-primary border-bColor shadow-md sticky top-0 left-0 z-[100] animate-[fadeTop_0.6s_linear]'>

        {/* Menu Container */}
        <div className="rounded-div flex items-center justify-between h-[70px]">

          {/* Logo */}
          <div>
            <Link to="/">
              <img className='max-w-[120px] lg:max-w-[180px]' src={theme === 'light' ? logoLight : logoDark} alt="" />
            </Link>
          </div>

          {/* Menu container */}
          <div className='hidden text-primary py-3 md:flex md:flex-1'>
            <ScrollLink activeClass="text-accent font-bold" to="about" spy={true} smooth={true} offset={-100} duration={500} >
              <button className='whitespace-nowrap min-w-[150px] hover:font-bold uppercase outline-none'>About Me</button>
            </ScrollLink>
            <ScrollLink activeClass="text-accent font-bold" to="projects" spy={true} smooth={true} offset={-100} duration={500} >
              <button className='whitespace-nowrap min-w-[150px]  hover:font-bold uppercase outline-none'>Projects</button>
            </ScrollLink>
            <ScrollLink activeClass="text-accent font-bold" to="contactme" spy={true} smooth={true} offset={-100} duration={500} >
              <button className='whitespace-nowrap min-w-[150px]  hover:font-bold uppercase outline-none'>Contact</button>
            </ScrollLink>
          </div>


          {/* Theme Toggle */}
          <div className='flex items-center space-x-7'>
            <ThemeToggle />
          </div>

        </div>
      </nav>



      {/* Bottom Navbar Container */}
      <div className='text-primary rouded-div bg-primary border-t border-bColor flex items-center justify-around px-3 py-2 fixed w-full left-0 bottom-0 transition-all duration-100 md:bottom-[-400px] z-50'>

        {/* <div className='text-primary flex flex-col items-center cursor-pointer w-[80px]'> */}
        <ScrollLink className='flex flex-col items-center cursor-pointer w-[80px]' activeClass="text-accent font-bold" to="about" spy={true} smooth={true} offset={-100} duration={500} >
          <MdFaceRetouchingNatural size={20} />
          <span className='text-sm'>About Me</span>
        </ScrollLink>
        {/* </div> */}

        {/* <div className='text-primary flex flex-col items-center cursor-pointer w-[80px]'> */}
        <ScrollLink className='flex flex-col items-center cursor-pointer w-[80px]' activeClass="text-accent font-bold" to="projects" spy={true} smooth={true} offset={-100} duration={500} >
            <AiOutlineFolder size={20} />
            <span className='text-sm'>Projects</span>
          </ScrollLink>
        {/* </div> */}

        {/* <div className='text-primary flex flex-col items-center cursor-pointer w-[80px]'> */}
        <ScrollLink className='flex flex-col items-center cursor-pointer w-[80px]' activeClass="text-accent font-bold" to="contactme" spy={true} smooth={true} offset={-100} duration={500} >
            <AiOutlineMessage size={20} />
            <span className='text-sm'>Contact</span>
          </ScrollLink>
        {/* </div> */}

      </div>
    </>
  )
}

export default Navbar