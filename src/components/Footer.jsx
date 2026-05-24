export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
            <div className="logo-icon" style={{ width: '28px', height: '28px' }} />
            AETHON
          </div>
          <p>10,000 unique warriors forged in the digital void. Own your legend on the Ethereum blockchain.</p>
        </div>
        <div className="footer-col">
          <h4>Project</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Twitter / X</a></li>
            <li><a href="#">OpenSea</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">IP Rights</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 AETHON. All rights reserved. Built on Ethereum.</p>
        <div className="footer-socials">
          <a href="#" className="social-btn">𝕏</a>
          <a href="#" className="social-btn" style={{ fontSize: '0.65rem' }}>DC</a>
          <a href="#" className="social-btn" style={{ fontSize: '0.65rem' }}>OS</a>
          <a href="#" className="social-btn">ig</a>
        </div>
      </div>
    </footer>
  );
}
