import React, { useEffect, useState } from 'react'
import "./NavBar.css"

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ""}`}>
      <img className='netflixlogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      <div className="navbar-content">
        <h4>Home</h4>
        <h4>Tv Shows</h4>
        <h4>Movies</h4>
        <h4>New & Popular</h4>
        <h4>My List</h4>
        <h4>Browse By Language</h4>
      </div>
    </div>
  )
}

export default NavBar
