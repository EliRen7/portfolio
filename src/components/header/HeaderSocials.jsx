import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaUnsplash} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/elizabeth27283" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/EliRen7" target="_blank" rel='noreferrer'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials