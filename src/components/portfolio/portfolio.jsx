import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/curls-by-ria.png'
import IMG2 from '../../assets/gameleon-cover.png'
import IMG3 from '../../assets/cafe-hoppers.png'
import IMG4 from '../../assets/travel-journal.png'
import IMG5 from '../../assets/meme-generator.png' 
import IMG6 from '../../assets/music-player-final.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Curls By Ria',
    github: 'https://github.com/EliRen7/Curls_by_Ria',
    demo: 'https://curlsbyria.com/'  
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gameleon',
    github: 'https://github.com/EliRen7/gameleonPPT',
    demo:   'https://gameleon-ppt.vercel.app/'
  },
  {

    id: 3,
    image: IMG3,
    title: 'Cafe-Hoppers',
    github: 'https://github.com/EliRen7/Cafe-Hoppers',
    demo: 'https://cafe-hoppers.onrender.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Travel Journal',
    github: 'https://github.com/EliRen7/travel-journal',
    demo: 'https://melodious-gecko-38717c.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Meme Generator',
    github: 'https://github.com/EliRen7/memegenerator',
    demo: 'https://cerulean-biscochitos-899144.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Music Player',
    github: 'https://github.com/EliRen7/Music-Player',
    demo: 'https://eliren7.github.io/Music-Player/'
  }
  
]


const Portfolio = () => {
  return (
    <div id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image,title,github,demo}) => {
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3> 
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </div>
  )
}

export default Portfolio