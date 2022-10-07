// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import Container from "../fragment/Container";
// const ContactUs = () => {
//   const [state, handleSubmit] = useForm("contactForm");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//     <Container>
//       <form onSubmit={handleSubmit}
//        action="https://formspree.io/f/xnqrdbpy"
//              method='POST'>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//       />
//       <ValidationError
//         prefix="Email"
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError
//         prefix="Message"
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//     </Container>
//   );
// }
// export default ContactUs;

import React from 'react'
import emailjs from 'emailjs-com'
// import Container from "../fragment/Container";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    e.target.reset();
    emailjs.sendForm('service_oup7zou', 'template_gujdbxo', e.target, 'DVxDLyoWzOz8krDSw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setFormStatus('Message Sent');
    let { name, email, message, Subject } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      Subject: Subject.value,
      message: message.value,
      // setFormStatus: ("")
      // confom : '',
    }
    console.log(conFom);

    // name.Value = ("");
    // email = ("");
    // Subject = ("");
    // message = ("");
  }

  return (
    // <Container>
    <>
      <div className="card text-light" style={{ width: 650, marginLeft: 150, backgroundColor: "#1F2D5A" }}>
        <div className="container mt-2">
          <h2 className="mb-3 text-center">ContactUs Form </h2>
          <form onSubmit={onSubmit}
          >
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Subject">
                Subject
              </label>
              <input className="form-control" type="text" name="subject" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" name="message" required />
            </div>
            <button className="btn btn-danger" type="submit" >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </>
    // </Container>
  )
}
export default Contact
// import { useForm, ValidationError } from '@formspree/react';
// import Container from "../fragment/Container";
// const ContactUs = () => {
//   const [state, handleSubmit] = useForm("contactForm");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//     <Container>
//       <form onSubmit={handleSubmit}
//        action="https://formspree.io/f/xnqrdbpy"
//              method='POST'>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//       />
//       <ValidationError
//         prefix="Email"
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError
//         prefix="Message"
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//     </Container>
//   );
// }
// export default ContactUs;