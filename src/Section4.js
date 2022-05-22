import React from 'react'
import chrome from './New assignment images/logo-chrome.svg'
import dot from './New assignment images/bg-dots.svg'
import firefox from './New assignment images/logo-firefox.svg'
import opera from './New assignment images/logo-opera.svg'
const Section4 = () => {
  return (
    <div className='div4'>
        <h1>Download the extension</h1>
        <p className='div4p'>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to priotize.
        </p>
        <div className='chm'>
        <img src={chrome} alt="" />
            <h5>Add to chrome</h5>
            <p>Minimum version 6.2</p>
            <img src={dot} style={{width: 200}} alt="" />
            <button className='btn-chrome'>Add and install Extension</button>
        </div>

        <div className='fire'>
        <img src={firefox} alt="" />
            <h5>Add to firefox</h5>
            <p>Minimum version 5.5</p>
            <img src={dot} style={{width: 200}} alt="" />
            <button className='btn-firefox'>Add and install extension</button>
        </div>

        <div className='opera'>
        <img src={opera} alt="" />
                <h5>Add to Opera</h5>
                <p>Minimum version 4.6</p>
                <img src={dot} style={{width: 200}} alt="" />
                <button className='btn-opera'>Add and install Extension</button>
        </div>
            </div>
  )
}

export default Section4