import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-left">
        <div className="hero-eyebrow">10,000 unique collectibles</div>
        <h1 className="hero-title">
          OWN<span>YOUR</span>LEGEND
        </h1>
        <p className="hero-sub">
          AETHON is a collection of 10,000 warriors forged in the digital void. Each token is your
          key to an exclusive world of art, utility, and community power.
        </p>
        <div className="hero-btns">
          <a href="#" className="btn-primary">Mint Now — 0.08 ETH</a>
          <a href="#collection" className="btn-outline">View Collection</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="nft-showcase">
          {/* Small card left */}
          <div className="nft-card-sm left">
            <div className="nft-sm-img art-2">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 90,75 10,75" fill="none" stroke="#4ade80" strokeWidth="2"/>
                <circle cx="50" cy="50" r="20" fill="#4ade8022" stroke="#4ade80" strokeWidth="1"/>
                <line x1="50" y1="10" x2="50" y2="90" stroke="#4ade8044" strokeWidth="1"/>
              </svg>
            </div>
            <div className="nft-sm-name">#0007</div>
            <div className="nft-sm-price">1.2 ETH</div>
          </div>

          {/* Main card */}
          <div className="nft-card-main">
            <div className="nft-image-wrap">
              <div className="nft-img-placeholder art-1">
                <img src={heroImg} alt="AETHON #0001" className="nft-hero-img" />
                <div className="nft-badge-rare">Legendary</div>
              </div>
            </div>
            <div className="nft-meta">
              <div>
                <div className="nft-name">AETHON #0001</div>
                <div className="nft-traits">
                  <span className="trait">Crimson Helm</span>
                  <span className="trait">Void Eyes</span>
                  <span className="trait">Shadow Armor</span>
                </div>
              </div>
              <div className="nft-price">12.5 ETH</div>
            </div>
          </div>

          {/* Small card right */}
          <div className="nft-card-sm right">
            <div className="nft-sm-img art-4">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="#60a5fa" strokeWidth="2" transform="rotate(15 50 50)"/>
                <rect x="30" y="30" width="40" height="40" fill="#60a5fa11" stroke="#60a5fa" strokeWidth="1" transform="rotate(30 50 50)"/>
                <circle cx="50" cy="50" r="8" fill="#60a5fa"/>
              </svg>
            </div>
            <div className="nft-sm-name">#0042</div>
            <div className="nft-sm-price">0.8 ETH</div>
          </div>
        </div>
      </div>
    </section>
  );
}
