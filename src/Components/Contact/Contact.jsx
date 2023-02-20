import styled from '@emotion/styled'
import React from 'react'
import "./Contact.css"
const Contact = () => {
    const Wrapper = styled.section`
    background-color: rgb(23, 3, 54);
    `
  return (
    <Wrapper name="Contact">
      <h1 style={{color:"white",textAlign:"center",fontSize:"20px",paddingTop:"3rem"}}>Feel free to contact</h1>
      <div className="container">
        <div className="contact-form">
            <form action="https://formspree.io/f/mvonkbap" method='POST' className='contact-input'>
                <input type="text" name='username' placeholder='username' autoComplete='off' required/>
                <input type="text" name='Email' placeholder='Email' autoComplete='off' required/>
                <textarea name="message" id="" cols="30" rows="6" required>

                </textarea>
                <input type="submit" value='send' style={{backgroundColor:"#ff3131",color:"white"}} />
            </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
