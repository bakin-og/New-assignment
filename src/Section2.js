import React from 'react'
import imgB from './New assignment images/illustration-features-tab-1.svg'

const Section2 = () => {
  return (
    <div className='div1'>
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
        <a href="#" className='getc'>Get it on chrome</a>
        <span>
          <a href="#" className='getf'>Get it on Firefox</a>
        </span>
        <div className='div2'>
            <h1>Features</h1>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sinks between your devices so you can access them on the go.</p>
            <a href="#" className='one'>Simple Bookmarking</a>
            <hr />
            <a href="#" className='two'>Simple Searching</a>
            <hr />
            <a href="#" className='three'>Easy sharing</a>
            <hr />
            <img src={imgB} style={{width: 300}} alt="" /> <br /> <br />
        </div>
    </div>
  )
}

export default Section2