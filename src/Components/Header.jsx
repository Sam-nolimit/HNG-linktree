import React from 'react';
import profilePicture from '../Assets/Temitope_pic.jpeg';
import share from '../Assets/Share-button.png';
import option from '../Assets/Three-dots.png';
import slack from '../Assets/Slack.png';
import github from '../Assets/Github.png';
import { Link } from 'react-router-dom'


function Header() {
    const twitter = 'https://twitter.com/TAdejolu';
    const zuriBtn = 'https://training.zuri.team/';
    const zuriBooks = 'http://books.zuri.team/';
    const pitch = 'https://background.zuri.team/';
    const zuriDesign = 'https://books.zuri.team/design-rules';
    const pythonBook = 'https://books.zuri.team/python-for-beginners?ref_id=sam-no-limit';


  return (
    <div>
        <header>
        <div className='profile'>
          <img src={profilePicture} alt='profile' id='profile_img' />
          <a href={twitter} id='twitter'>
            Adejolu Temitope
          </a>
          <h1 id='slack'>
            Adejolu Temitope
          </h1>
        </div>
        <div className='share'>
          <img src={share} alt='share' className='share_icon' />
          <img src={option} alt='option' className='option_icon' />
        </div>
      </header>
      <main className='container'>
        <div className='buttons'>
          <a href={twitter} id='twitter' >
            Twitter Link
          </a>
          <a href={zuriBtn} id='btn__zuri' >
            Zuri Team
          </a>
          <a href={zuriBooks} id='books' title='Books about design and coding'>
            Zuri Books
          </a>
          <a href={pythonBook} id='book__python' title='Python Mastery in 3 months'>
            Python Books
          </a>
          <a href={pitch} id='pitch' title='Let us help you verify your code'>
            Background Check for Coders
          </a>
          <a href={zuriDesign} id='book__design' title='FREE Design rules book'>
            Design Books
          </a>
          <Link to="/contact">
          Contact Me
          </Link>
          </div>
          <div className='icons'>
          <img src={slack} alt='slack' />
          <img src={github} alt='github'/>
        </div>
      </main>
    </div>
  )
}

export default Header