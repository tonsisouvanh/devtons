import React, { useContext } from 'react'
import tiktok from '../assets/images/tiktok.png'
import facebook from '../assets/images/facebook.png'
import github from '../assets/images/github.png'
import githubWhite from '../assets/images/github-white.png'
import twitter from '../assets/images/twitter.png'

import { MdArrowBackIos } from 'react-icons/md'

import { ThemeContext } from '../context/ThemeContext';

const SocialMedia = () => {
  const { theme } = useContext(ThemeContext);

  return (  
    <>
      <div className='hidden fixed items-center top-[40%] -right-4 md:-right-7 lg:-right-1 transition-all ease-in-out duration-200 hover:-right-0 w-[28px] md:w-[40px] mr-1 z-[60]  md:flex'>
        <MdArrowBackIos className='text-[40px] text-primary animate-ping cursor-pointer' />
        <div className='flex flex-col gap-y-2'>
          <a href="https://www.tiktok.com/@tons_pml?lang=en" target='blank' rel="noreferrer">
            <img className='shadow-lg transition-transform hover:scale-125' src={tiktok} alt="" />
          </a>
          <a href="https://www.facebook.com/ton.sisouvanh" target='blank' rel="noreferrer">
            <img className='shadow-lg transition-transform hover:scale-125' src={facebook} alt="" />
          </a>
          <a href="https://github.com/tonsisouvanh" target='blank' rel="noreferrer">
            <img className='shadow-lg transition-transform hover:scale-125' src={theme === 'dark' ? githubWhite : github} alt="" />
          </a>
          <a href="https://twitter.com/" target='blank' rel="noreferrer">
            <img className='shadow-lg transition-transform hover:scale-125' src={twitter} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialMedia