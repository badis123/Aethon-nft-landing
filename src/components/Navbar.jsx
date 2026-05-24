import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">
        <div className="logo-icon" />
        AETHON
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <button className="btn-connect">Connect Wallet</button>
    </nav>
  );
}
