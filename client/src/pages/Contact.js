import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const form = useRef(null);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        emailjs.init('YOUR_USER_ID');
    }, []);

    const sendEmail = () => {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current).then(
            (result) => {
                console.log('SUCCESS!', result.status, result.text);
                setSuccessMessage('Email was sent!');
                setFormData({
                    email: '',
                    name: '',
                    subject: '',
                    message: '',
                });
            },
            (error) => {
                console.log('FAILED to send the message, please try again', error.text);
                setErrorMessage('FAILED to send the message.');
            }
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { email, name } = formData;

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
                                value={formData.name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <input
                                className="contact-half"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                className="contact-li"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                type="text"
                                name="subject"
                                required
                            />
                            <textarea
                                className="contact-textarea"
                                value={formData.message}
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
