import React from 'react'
import bookmark from './New assignment images/logo-bookmark.svg'
import facebook from './New assignment images/icon-facebook.svg'
import  twitter from './New assignment images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='foot'>

    <div id='footer1'>
        <p>35,000 + ALREADY JOINED</p>
        <h2>Stay up-to-date with what we are doing</h2>
        <form action="#">
            <label htmlFor="email"></label>
            <input type="text" placeholder='example@gmail.com' className='p1' /> <br /> 
            <button className='p2'>Contact us</button>
        </form>
    </div>
<div>
    <div id='footer2'>
    <img src= {bookmark} alt="" />
    <div>
        <a href="#">Features</a> <br />
        <a href="#">Pricing</a> <br />
        <a href="#">Contact</a>
        <div>
        <img src= {facebook} alt="" />
        <img src= {twitter} alt="" className='imgt' />
    </div>

    </div>
   
    </div>
    
</div>

    






    </div>
  )
}

export default Footer