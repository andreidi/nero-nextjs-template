'use client';

import { fetchRequest } from '../utils/fetch';

import { CONTACT_ENDPOINT_URL } from '../utils/data';
import { FormEvent, useState } from 'react';

/**
 * Contact form component
 *
 * This component is an important part of your website where the user can reach out to you by interacting with the form elements and submitting the data.
 */
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      email,
      message
    };

    const { response } = await fetchRequest(CONTACT_ENDPOINT_URL, 'POST', data);

    if (response.status === 200) {
      alert('Thank you for contacting me! I will get back in touch with you soon.');
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setMessage(value);
  };

  return (
    <form className='text-gray-700' onSubmit={handleSubmit}>
      <div>
        <label className='uppercase font-sm font-medium tracking-wider text-gray-500'>Name</label>

        <input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Enter your name'
          className='mt-2'
          required
        />
      </div>

      <div className='mt-7'>
        <label className='uppercase font-sm font-medium tracking-wider text-gray-500'>Email Address</label>

        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter your email address'
          className='mt-2'
          required
        />
      </div>

      <div className='mt-7'>
        <label className='uppercase font-sm font-medium tracking-wider text-gray-500'>Message</label>

        <textarea
          value={message}
          onChange={handleMessageChange}
          className='mt-2 block w-full px-2 h-36'
          required
        />

        <small className='text-gray-500 text-sm'>Any non-business related submissions will be ignored.</small>
      </div>

      <div className='text-center'>
        <button className='button mt-8' type='submit'>Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;
