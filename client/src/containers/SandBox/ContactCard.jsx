import React from 'react';

export default function ContactCard(props) {
  const { imgUrl, name, phone, email } = props.contact;
  return (
    <div className="contact-card">
      <img src={imgUrl} alt="Kitten" />
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}
