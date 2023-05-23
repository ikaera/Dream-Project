import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    emailjs.init('YOUR_USER_ID');
  }, []);

  const sendEmail = () => {
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current)
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          setSuccessMessage('Email was sent!');
          setName('');
          setSubject('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED to send the message, please try again', error.text);
          setErrorMessage('FAILED to send the message.');
        }
      );
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }

    sendEmail();
  };

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Contact Us!</h1>
        {successMessage && (
          <div>
            <p className="success-text">{successMessage}</p>
          </div>
        )}
        <div className="contact-form">
          <form id="my-form" className="form" ref={form} onSubmit={handleFormSubmit}>
            <div className="grid-container">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="contact-input"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="contact-input"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  className="contact-input"
                  placeholder="Enter the subject"
                  value={subject}
                  onChange={handleInputChange}
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="contact-textarea"
                  value={message}
                  placeholder="Enter your message"
                  onChange={handleInputChange}
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="contact-button" value="SEND" />
              </div>
            </div>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
