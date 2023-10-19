import React from 'react'
import './Form.css';
const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6"placeholder='type your message here...'></textarea>
        <button className='btn'>SUBMIT</button>

      </form>
    </div>
  );
}

export default Form;
