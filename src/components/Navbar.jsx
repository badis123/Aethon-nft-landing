import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <a href="#" className="nav-logo">
        <div className="logo-icon" />
        AETHON
      </a>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#collection" onClick={() => setIsMenuOpen(false)}>Collection</a></li>
        <li><a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a></li>
        <li><a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a></li>
        <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
        <li className="mobile-only"><button className="btn-connect">Connect Wallet</button></li>
      </ul>

      <div className="nav-right">
        <button className="btn-connect desktop-only">Connect Wallet</button>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
