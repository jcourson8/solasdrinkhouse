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
    <div className="bg-lightTan text-black font-plex py-4">
      <h1 className="text-lg mb-4 text-center px-3">This pages is under development! We would love to serve you. Send us an email at: solasdrinkhouse@gmail.com with your event details! </h1>
      {/* <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 px-4 ">
        <label className="text-left mr-2 ">Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="border border-black rounded" />

        <label className="text-left mr-2">Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="border border-black rounded" />

        <label className="text-left mr-2">Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border border-black rounded" />

        <label className="text-left mr-2">Subject:</label>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="border border-black rounded" />

        <label className="text-left mr-2">Message:</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} className="border border-black rounded" />

        <div></div>
        <button type="submit" className="bg-black text-white px-2 py-2 mt-2 rounded">Submit</button>
      </form> */}
    </div>
  );
};

export default InquiriesPage;