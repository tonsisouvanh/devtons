import React, { useState } from 'react'
import { AiFillGithub, AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { GoEye } from 'react-icons/go'
import { TbWorld } from 'react-icons/tb'
import { AnimatePresence, motion } from 'framer-motion'
import { CgCloseO } from 'react-icons/cg'
import imgskeleton from '../assets/images/imgskeleton.png'

const ProjectCard = ({ id, name, desc, imgs, techStack, github, website }) => {

  const [select, setSelect] = useState(0);
  const [slide, setSlide] = useState(0);

  const length = imgs.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: {
          duration: 0.3
        }
      }}
      layout
      className='group relative shadow-lg h-[260px] rounded-md text-white overflow-hidden inline-block sm:h-[380px] md:w-[500px] md:h-[300px]'>
      {/* <div className='bg-black top-0 left-0 w-full h-full'></div> */}
      <img className='w-full h-full object-cover transition-transform ease-in-out duration-150 group-hover:scale-110' src={imgs[0]} alt="/" />

      <div className='absolute flex flex-col justify-between top-0 left-0 w-full h-full bg-gradient-to-t from-black'>
        {/* top div */}
        <div className='flex items-start justify-between'>
          {/* project name */}
          <div className='bg-highlight font-bold px-3 py-1 rounded-br-md shadow shadow-gray-500'>
            <h4>{name}</h4>
          </div>
          {/* Link container */}
          <div className='text-xl flex gap-3 p-2 bg-black/60 rounded-bl-md'>
            <span>
              <GoEye onClick={() => setSelect(id)} className='cursor-pointer hover:scale-110' />
            </span>
            <a href={github} target='_blank' rel="noreferrer">
              <AiFillGithub className='cursor-pointer hover:scale-110' />
            </a>
            <a href={website} target='_blank' rel="noreferrer">
              <TbWorld className='cursor-pointer hover:scale-110' />
            </a>
          </div>
        </div>

        {/* Bottom div */}
        <div className='p-3 text-sm space-y-2'>
          <p className='text-gray-300 md:text-md'>
            {desc}
          </p>
          {/* Teach stack */}
          <p className='font-bold md:text-lg'>{techStack}</p>
        </div>
      </div>


      {/* View image slider */}
      <AnimatePresence>
        {select === id ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.5
              }
            }}
            className='z-[100] fixed w-screen h-screen bg-black/70 top-0 left-0 right-0 flex items-center justify-center p-5'>

            <CgCloseO className='text-3xl cursor-pointer opacity-75 absolute top-3 right-3 transition hover:opacity-100 md:top-5 md:right-8 md:text-4xl' onClick={() => setSelect(0)} />

            <div className=' max-w-[1240px] relative flex justify-center items-center md:max-w-[1300px]'>

              <AiFillLeftCircle onClick={prevSlide} className='select-none text-[#00B0FF] absolute cursor-pointer text-3xl top-[50%] left-1 opacity-60 transition hover:opacity-100 md:text-5xl' />
              <AiFillRightCircle onClick={nextSlide} className='select-none text-[#00B0FF] absolute cursor-pointer text-3xl top-[50%] right-1 opacity-60 transition hover:opacity-100 md:text-5xl' />

              {imgs.map((img, index) => (
                <motion.div

                  key={index}
                  className={index === slide ? 'opacity-100' : 'opacity-0'}>
                  {index === slide && (
                    <img
                      className='w-full object-cover border'
                      src={img || imgskeleton}
                      alt={imgskeleton} />)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null
        }
      </AnimatePresence>


    </motion.div >
  )
}

export default ProjectCard