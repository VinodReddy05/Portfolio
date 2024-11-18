import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RingLoader } from 'react-spinners';
import './Mail.css';

const Mail = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);   

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);   

    const user_email = form.current.user_email.value;
    const user_name = form.current.user_name.value;
    const message = form.current.message.value;

    const adminTemplateParams = {
      reply_to: user_email,
      from_name: user_name,
      message: message,
    };

    emailjs
      .send('service_3xe6j31', 'template_tkzmrie', adminTemplateParams, '5EGatrhmCn5h4LJZs')
      .then(
        () => {
          console.log('Email sent to admin successfully!');
        },
        (error) => {
          console.log('FAILED to send to admin...', error.text);
        }
      );

    const userTemplateParams = {
      user_email: user_email,
      user_name: user_name,
      message: message,
    };

    emailjs
      .send('service_3xe6j31', 'template_wi1hfkp', userTemplateParams, '5EGatrhmCn5h4LJZs')
      .then(
        () => {
          console.log('Confirmation email sent to user successfully!');
          setLoading(false);  
        },
        (error) => {
          console.log('FAILED to send to user...', error.text);
          setLoading(false);   
        }
      );
  };

  return (
    <div className="mail-container">
      <h1 className='contactme'>Contact me</h1>
      <div className='mail' id="mail">
        {loading ? (
          <div className="loader-container">
            <RingLoader size={50} color="#36d7b7" />
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" spellcheck="true"  required />
            <label>Email</label>
            <input type="email" name="user_email" spellcheck="false"  required />
            <label>Message</label>
            <textarea name="message" spellcheck="false"  required />
            <input type="submit" value="Send" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Mail;
