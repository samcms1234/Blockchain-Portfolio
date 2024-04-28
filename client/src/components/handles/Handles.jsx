import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { SiCodechef } from "react-icons/si";
import { FaGithubSquare, FaHackerrank } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/kshitij-srivastava-4778a8151/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://twitter.com/kshitijweb3?lang=en" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/kshitijofficial" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' /></a>
      <a href="https://github.com/kshitijofficial" target='_blank' rel="noopener noreferrer"><SiCodechef className='icon' /></a>
      <a href="https://github.com/kshitijofficial" target='_blank' rel="noopener noreferrer"><FaHackerrank className='icon' /></a>


    </section>
  )
}

export default Handles
