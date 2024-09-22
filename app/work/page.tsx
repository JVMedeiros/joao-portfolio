"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import "swiper/css"
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 01',
    description: 'Lorem ipsum',
    stack: [{ name: 'Nest JS' }, { name: 'TailwindCSS' }, { name: 'Html 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/assets/work/thumb1.jpg',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'frontend2',
    title: 'project 02',
    description: 'Lorem ipsum',
    stack: [{ name: 'Nest JS' }, { name: 'TailwindCSS' }, { name: 'Html 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/assets/work/thumb2.jpg',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'frontend3',
    title: 'project 03',
    description: 'Lorem ipsum',
    stack: [{ name: 'Nest JS' }, { name: 'TailwindCSS' }, { name: 'Html 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/assets/work/thumb3.jpg',
    live: '',
    github: ''
  },
  {
    num: '04',
    category: 'frontend4',
    title: 'project 04',
    description: 'Lorem ipsum',
    stack: [{ name: 'Nest JS' }, { name: 'TailwindCSS' }, { name: 'Html 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/assets/work/thumb4.jpg',
    live: '',
    github: ''
  },
]

function Work() {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlideIndex = swiper.activeIndex;
    setProject(projects[currentSlideIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              onSlideChange={handleSlideChange}
              className='xl:h-[520px] mb-12'
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide 
                    key={index}
                    className='w-full'
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> 
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="project preview image"/>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work