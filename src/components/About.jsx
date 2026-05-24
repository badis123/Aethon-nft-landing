import { useEffect, useRef } from 'react';
import heroImg from '../assets/hero.png';

const features = [
  { icon: '⬡', title: '180+ Traits', desc: 'Hundreds of hand-drawn traits across weapons, armor, eyes, and backgrounds — no two AETHON are alike.' },
  { icon: '◈', title: 'Community DAO', desc: 'Holders vote on treasury decisions, future drops, and the direction of the AETHON universe.' },
  { icon: '◉', title: 'Full IP Rights', desc: 'You own your AETHON completely. Use it commercially, license it, or build a brand around it.' },
  { icon: '⬢', title: 'Staking Rewards', desc: 'Stake your AETHON to earn $VOID tokens redeemable for exclusive drops and real-world perks.' },
];

export default function About() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="about-content">
        <div className="reveal" ref={(el) => (refs.current[0] = el)}>
          <span className="section-tag">The Legend</span>
          <h2 className="section-title">WHAT IS<br />AETHON?</h2>
          <div className="about-text">
            <p>In the age before memory, the AETHON warriors emerged from the digital void — forged by algorithm, tempered by chaos, and bound by an unbreakable covenant of code.</p>
            <p>Each of the 10,000 AETHON NFTs is a unique generative artwork built from 180+ hand-crafted traits. Your token is more than art — it's membership, identity, and power.</p>
            <p>Holders gain access to exclusive drops, governance votes, and the growing AETHON universe spanning games, physical merch, and community events.</p>
          </div>
        </div>
        
        <div className="about-visual reveal reveal-delay-2" ref={(el) => (refs.current[2] = el)}>
           <img src={heroImg} alt="AETHON Warrior" className="about-hero-img" />
           <div className="visual-glow" />
        </div>
      </div>

      <div className="features-grid reveal reveal-delay-1" ref={(el) => (refs.current[1] = el)}>
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-title">{f.title}</div>
            <div className="feat-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
