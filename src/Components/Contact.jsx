import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [email,setemail]=useState("")
    const [name,setname]=useState("")
    const [message,setmessage]=useState("")
  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  setemail("")
  setmessage("")
  setname("")
  alert("hello")
console.log(form.value)
  emailjs.send('service_kbvy38p', 'template_m0i3bsg', {user_name:name,user_email:email,message:message},"kKLgu-eFEokmD3ilL")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  return (
    <div name="contact" className=" w-full h-auto text-black bg-white md:h-full ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-40">
          <p className=" text-4xl font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail}className="flex flex-col w-full md:w-1/2">
            <input value={name}  onChange={(e)=>{setname(e.target.value)}} 
              type="text"
              name="name"
              placeholder="Enter name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input value={email}  onChange={(e)=>{setemail(e.target.value)}} 
              type="text"
              name="email"
              placeholder="Enter email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea value={message}  onChange={(e)=>{setmessage(e.target.value)}}
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>
            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
        
      </div>
      
    </div>



  );
};

export default Contact;