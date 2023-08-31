import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiSkypeforbusiness} from 'react-icons/si'
import {BsCameraVideo} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an3nx6q', 'template_txrhdub', form.current, 'NRvqU9gmZ7mXweZ7B')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
      {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact