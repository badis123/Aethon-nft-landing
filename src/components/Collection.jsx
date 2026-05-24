import { useEffect, useRef } from 'react';
import heroImg from '../assets/hero.png';

const marqueeItems = [
  { art: 'art-1', name: '#0003', rarity: 'Legendary', svg: <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="20" fill="none" stroke="#e63946" strokeWidth="1.5"/><path d="M30 10 L50 50 L10 50Z" fill="#e6394422" stroke="#e63946" strokeWidth="1"/></svg> },
  { art: 'art-2', name: '#0018', rarity: 'Rare', svg: <svg viewBox="0 0 60 60"><rect x="10" y="10" width="40" height="40" fill="none" stroke="#4ade80" strokeWidth="1.5" rx="4"/><circle cx="30" cy="30" r="10" fill="#4ade8033"/></svg> },
  { art: 'art-3', name: '#0031', rarity: 'Epic', svg: <svg viewBox="0 0 60 60"><polygon points="30,5 55,20 55,40 30,55 5,40 5,20" fill="none" stroke="#f97316" strokeWidth="1.5"/><circle cx="30" cy="30" r="8" fill="#f9731633"/></svg> },
  { art: 'art-4', name: '#0055', rarity: 'Rare', svg: <svg viewBox="0 0 60 60"><line x1="5" y1="30" x2="55" y2="30" stroke="#60a5fa" strokeWidth="1"/><line x1="30" y1="5" x2="30" y2="55" stroke="#60a5fa" strokeWidth="1"/><circle cx="30" cy="30" r="15" fill="none" stroke="#60a5fa" strokeWidth="1.5"/></svg> },
  { art: 'art-5', name: '#0072', rarity: 'Common', svg: <svg viewBox="0 0 60 60"><rect x="15" y="15" width="30" height="30" fill="#f4c43022" stroke="#f4c430" strokeWidth="1.5" transform="rotate(45 30 30)"/></svg> },
  { art: 'art-6', name: '#0089', rarity: 'Epic', svg: <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="22" fill="none" stroke="#c084fc" strokeWidth="1.5"/><circle cx="30" cy="30" r="12" fill="#c084fc22"/><circle cx="30" cy="30" r="4" fill="#c084fc"/></svg> },
  { art: 'art-1', name: '#0104', rarity: 'Rare', svg: <svg viewBox="0 0 60 60"><path d="M10 50 Q30 10 50 50" fill="none" stroke="#e63946" strokeWidth="2"/><circle cx="30" cy="30" r="5" fill="#e63946"/></svg> },
  { art: 'art-2', name: '#0117', rarity: 'Common', svg: <svg viewBox="0 0 60 60"><polygon points="30,8 52,22 52,38 30,52 8,38 8,22" fill="#4ade8011" stroke="#4ade80" strokeWidth="1.5"/></svg> },
];

const collectionCards = [
  {
    art: 'art-1', name: 'AETHON #0001', price: '12.5 ETH', badge: 'Legendary', badgeClass: 'badge-legendary',
    svg: <img src={heroImg} alt="AETHON #0001" style={{width:'85%',height:'85%',objectFit:'contain'}} />,
  },
  {
    art: 'art-2', name: 'AETHON #0007', price: '3.2 ETH', badge: 'Rare', badgeClass: 'badge-rare',
    svg: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <defs><radialGradient id="cg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/><stop offset="100%" stopColor="#0a1a0f" stopOpacity="0"/></radialGradient></defs>
        <rect width="200" height="200" fill="url(#cg2)"/>
        <polygon points="100,20 170,80 145,160 55,160 30,80" fill="#0a1a0f" stroke="#4ade80" strokeWidth="1.5"/>
        <circle cx="80" cy="85" r="10" fill="#4ade80"/>
        <circle cx="120" cy="85" r="10" fill="#4ade80"/>
        <path d="M75 115 L100 125 L125 115" fill="none" stroke="#4ade80" strokeWidth="1.5"/>
        <line x1="60" y1="50" x2="140" y2="50" stroke="#4ade8044" strokeWidth="1"/>
        <circle cx="100" cy="170" r="15" fill="#4ade8022" stroke="#4ade80" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    art: 'art-4', name: 'AETHON #0042', price: '2.8 ETH', badge: 'Rare', badgeClass: 'badge-rare',
    svg: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <defs><radialGradient id="cg3" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3"/><stop offset="100%" stopColor="#0a0f1a" stopOpacity="0"/></radialGradient></defs>
        <rect width="200" height="200" fill="url(#cg3)"/>
        <rect x="55" y="40" width="90" height="120" rx="8" fill="#0a0f1a" stroke="#60a5fa" strokeWidth="1.5"/>
        <ellipse cx="80" cy="85" rx="10" ry="7" fill="#60a5fa"/>
        <ellipse cx="120" cy="85" rx="10" ry="7" fill="#60a5fa"/>
        <rect x="70" y="108" width="60" height="8" rx="4" fill="#60a5fa33" stroke="#60a5fa" strokeWidth="0.5"/>
        <line x1="55" y1="70" x2="35" y2="55" stroke="#60a5fa88" strokeWidth="2"/>
        <line x1="145" y1="70" x2="165" y2="55" stroke="#60a5fa88" strokeWidth="2"/>
        <circle cx="100" cy="170" r="12" fill="#60a5fa22" stroke="#60a5fa" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    art: 'art-5', name: 'AETHON #0099', price: '0.5 ETH', badge: 'Common', badgeClass: 'badge-common',
    svg: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <defs><radialGradient id="cg4" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f4c430" stopOpacity="0.3"/><stop offset="100%" stopColor="#1a1a0a" stopOpacity="0"/></radialGradient></defs>
        <rect width="200" height="200" fill="url(#cg4)"/>
        <polygon points="100,25 165,65 165,135 100,175 35,135 35,65" fill="#1a1a0a" stroke="#f4c430" strokeWidth="1.5"/>
        <ellipse cx="80" cy="90" rx="11" ry="7" fill="#f4c430"/>
        <ellipse cx="120" cy="90" rx="11" ry="7" fill="#f4c430"/>
        <path d="M75 120 Q100 135 125 120" fill="none" stroke="#f4c430" strokeWidth="1.5"/>
        <polygon points="100,35 110,55 130,55 115,68 120,88 100,75 80,88 85,68 70,55 90,55" fill="#f4c43022" stroke="#f4c430" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    art: 'art-6', name: 'AETHON #0333', price: '8.9 ETH', badge: 'Legendary', badgeClass: 'badge-legendary',
    svg: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <defs><radialGradient id="cg5" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.4"/><stop offset="100%" stopColor="#1a0a1a" stopOpacity="0"/></radialGradient></defs>
        <rect width="200" height="200" fill="url(#cg5)"/>
        <circle cx="100" cy="90" r="50" fill="#1a0a1a" stroke="#c084fc" strokeWidth="1.5"/>
        <circle cx="100" cy="90" r="35" fill="none" stroke="#c084fc44" strokeWidth="1"/>
        <ellipse cx="82" cy="82" rx="10" ry="7" fill="#c084fc"/>
        <ellipse cx="118" cy="82" rx="10" ry="7" fill="#c084fc"/>
        <circle cx="82" cy="82" r="4" fill="#fff"/>
        <circle cx="118" cy="82" r="4" fill="#fff"/>
        <path d="M75 108 Q100 125 125 108" fill="none" stroke="#c084fc" strokeWidth="1.5"/>
        <circle cx="100" cy="160" r="20" fill="#c084fc11" stroke="#c084fc" strokeWidth="1"/>
        <line x1="88" y1="152" x2="88" y2="168" stroke="#c084fc88" strokeWidth="1.5"/>
        <line x1="100" y1="148" x2="100" y2="172" stroke="#c084fc" strokeWidth="1.5"/>
        <line x1="112" y1="152" x2="112" y2="168" stroke="#c084fc88" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    art: 'art-3', name: 'AETHON #0666', price: '5.1 ETH', badge: 'Epic', badgeClass: 'badge-epic',
    svg: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <defs><radialGradient id="cg6" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/><stop offset="100%" stopColor="#1a0a0a" stopOpacity="0"/></radialGradient></defs>
        <rect width="200" height="200" fill="url(#cg6)"/>
        <path d="M100 30 L155 70 L155 130 L100 170 L45 130 L45 70Z" fill="#1a0a0a" stroke="#f97316" strokeWidth="1.5"/>
        <ellipse cx="83" cy="88" rx="11" ry="7" fill="#f97316"/>
        <ellipse cx="117" cy="88" rx="11" ry="7" fill="#f97316"/>
        <line x1="78" y1="112" x2="122" y2="112" stroke="#f97316" strokeWidth="1.5"/>
        <path d="M100 30 L100 10" stroke="#f9731688" strokeWidth="2"/>
        <circle cx="100" cy="8" r="4" fill="#f97316"/>
        <path d="M45 70 L30 60" stroke="#f9731688" strokeWidth="2"/>
        <path d="M155 70 L170 60" stroke="#f9731688" strokeWidth="2"/>
      </svg>
    ),
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2'];

export default function Collection() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection">
      <span className="section-tag reveal" ref={(el) => (revealRefs.current[0] = el)}>The Collection</span>
      <h2 className="section-title reveal" ref={(el) => (revealRefs.current[1] = el)}>MEET THE<br />WARRIORS</h2>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div className="marquee-card" key={i}>
              <div className={`marquee-img ${item.art}`}>{item.svg}</div>
              <div className="marquee-name">{item.name}</div>
              <div className="marquee-rarity">{item.rarity}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="collection-grid">
        {collectionCards.map((card, i) => (
          <div
            className={`col-card reveal ${delays[i % 3]}`}
            key={card.name}
            ref={(el) => (revealRefs.current[2 + i] = el)}
          >
            <div className={`col-img ${card.art}`}>
              {card.svg}
              <div className={`col-badge ${card.badgeClass}`}>{card.badge}</div>
            </div>
            <div className="col-name">{card.name}</div>
            <div className="col-footer">
              <span className="col-price">{card.price}</span>
              <button className="btn-view">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
