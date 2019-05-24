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

// class App extends Component {
//   render() {
//     return (
//       <div className="container contacts">
//         <ContactCard
//           contact={{
//             name: 'KittyBoi',
//             imgUrl: 'http://placekitten.com/400/200',
//             phone: '555-5555',
//             email: 'meowemwo@meowme.com',
//           }}
//         />
//         <ContactCard
//           contact={{
//             name: 'Chester',
//             imgUrl: 'http://placekitten.com/300/200',
//             phone: '555-5555',
//             email: 'meowemwo@meowme.com',
//           }}
//         />
//         <ContactCard
//           contact={{
//             name: 'Rexxxxx',
//             imgUrl: 'http://placekitten.com/400/300',
//             phone: '555-5555',
//             email: 'meowemwo@meowme.com',
//           }}
//         />
//         <ContactCard
//           contact={{
//             name: 'Sloppy',
//             imgUrl: 'http://placekitten.com/200/100',
//             phone: '555-5555',
//             email: 'meowemwo@meowme.com',
//           }}
//         />
//       </div>
//     );
//   }
// }
// export default App;
