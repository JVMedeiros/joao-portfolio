"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'About me',
  description: 'About me',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'João Medeiros'
    },
    {
      fieldName: 'Phone',
      fieldValue: '+55 12 981045177'
    },
    {
      fieldName: 'Experience',
      fieldValue: 'Almost 5 years'
    },
    {
      fieldName: 'Email',
      fieldValue: 'jv.medeiros.gallina@gmail.com'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Brazilian'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Fulltime',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Language',
      fieldValue: 'Portuguese, English'
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Description',
  items: [
    {
      company: 'Hospital Israelita Albert Einstein',
      position: 'Tech Lead and Software Engineer',
      duration: '2023 - Present'
    },
    {
      company: 'Hospital Israelita Albert Einstein',
      position: 'Fullstack Software Engineer',
      duration: '2020 - 2023'
    },
    {
      company: 'Zappts',
      position: 'Mobile and Frontend Intern',
      duration: '2020 - 2020'
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Description',
  items: [
    {
      company: 'FATEC - São José dos Campos',
      degree: 'System Analysis and Development',
      duration: '2023 - Present'
    },
    {
      company: 'Rocketseat',
      degree: 'Backend Bootcamp',
      duration: '2024'
    },
    {
      company: 'Rocketseat',
      degree: 'Frontend Bootcamp',
      duration: '2024 - Present'
    },
    {
      company: 'Rocketseat',
      degree: 'Golang Bootcamp',
      duration: '2024 - Present'
    },
  ]
}

function Resume() {
  return (
    <div>
      Resume page
    </div>
  )
}

export default Resume