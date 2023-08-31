import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <div id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>ReactJS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NextJS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Tailwind</h4>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Vercel, Netlify</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML, CSS, JS</h4>
              </div>
            </article>
          </div>
        </div>

  

        <div className="experience__backend">
        <h3>Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NodeJS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>ExpressJs</h4>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Render</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MongoDb Atlas</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Experience