'use client'
import React, { useState } from 'react';

const InquiriesPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here.
    console.log(name, email, phoneNumber, subject, message);
  };

  return (
    <div className="container mx-auto bg-lightTan text-black font-plex pt-2">
      <h1 className="text-lg mb-4 text-center">We would love to serve you. Let us know about your event!</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 px-2">
        <label className="text-right mr-2">Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="border border-black rounded" />

        <label className="text-right mr-2">Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="border border-black rounded" />

        <label className="text-right mr-2">Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border border-black rounded" />

        <label className="text-right mr-2">Subject:</label>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="border border-black rounded" />

        <label className="text-right mr-2">Message:</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} className="border border-black rounded" />

        <div></div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default InquiriesPage;