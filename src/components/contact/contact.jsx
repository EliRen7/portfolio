import React, { useState, useEffect }from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiSkypeforbusiness} from 'react-icons/si'
import {BsCameraVideo} from 'react-icons/bs'

function Contact() {

  return (
    <div id='contact'>
      <h5>Get in Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>elirenderos@gmail.com</h5>
            <a href="mailto:elirenderos@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <SiSkypeforbusiness className='contact__option-icon'/>
            <h4>Skype</h4>
            <h5>+12345667</h5>
            <a href="https://join.skype.com/invite/zedE2cWZYc9R" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsCameraVideo className='contact__option-icon'/>
            <h4>Zoom</h4>
            <h5>ID: 3277612314</h5>
            <a href="https://us05web.zoom.us/j/3277612314?pwd=eW9yOFpKUEVCLzhyVTdWa29aT2QyZz09" target="_blank">Schedule a meeting</a>
          </article>
        </div>
      <form  action="https://formcarry.com/s/z-NofMdhiD" method="POST" accept-charset="UTF-8">
      <label htmlFor="name">Name</label>
      <input id="name" type="name" name="name"/>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email"/>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"/>
      <button type="submit" className='btn btn-primary'>Send</button>
    </form>
      </div>
    </div>
  )
}

export default Contact







