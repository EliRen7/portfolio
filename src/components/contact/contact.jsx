import React, { useState, useEffect }from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiSkypeforbusiness} from 'react-icons/si'
import {BsCameraVideo} from 'react-icons/bs'
import { useForm } from '@formcarry/react';

function Contact() {
  // Call the "useForm" hook in your function component
  const {state, submit} = useForm({
    id: 'z-NofMdhiD'
  });


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [refreshFlag, setRefreshFlag] = useState(false);

  // Success message
  useEffect(() => {
    if (state.submitted) {
      alert('Thank you! I have received your submission and will respond promptly.');
      // Clear the form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      // Trigger a refresh
      setRefreshFlag(true);
    }
  }, [state.submitted]);

  useEffect(() => {
    if (refreshFlag) {
      window.location.reload();
      setRefreshFlag(false);
    }
  }, [refreshFlag]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  // // Success message
  // if (state.submitted) {
  //   alert('Thank you! I have received your submission')

  // }


  return (
    <div id='contact'>
      <h5>Get in Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>liz_774@yahoo.com</h5>
            <a href="mailto:liz_774@yahoo.com" target="_blank">Send a message</a>
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
      <form onSubmit={submit}>
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







