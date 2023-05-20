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
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>Contact Page</h1>
                    <p></p>
                    {successMessage && (
                        <div>
                            <p className="success-text">{successMessage}</p>
                        </div>
                    )}
                    <div className="contact-form">
                        <form id="my-form" className="form" ref={form} onSubmit={handleFormSubmit}>
                            <input
                                className="contact-half"
                                value={name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <input
                                className="contact-half"
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                className="contact-li"
                                placeholder="Subject"
                                value={subject}
                                onChange={handleInputChange}
                                type="text"
                                name="subject"
                                required
                            />
                            <textarea
                                className="contact-textarea"
                                value={message}
                                placeholder="Message"
                                onChange={handleInputChange}
                                name="message"
                                required
                            ></textarea>
                            <input type="submit" className="contact-flat-button" value="SEND" />
                        </form>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
