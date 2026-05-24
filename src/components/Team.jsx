import { useEffect, useRef } from 'react';

const members = [
  {
    initials: 'ZG', name: 'ZAGR', role: 'Founder & Creative',
    bio: '10 years in generative art, ex-game designer with passion for Web3 storytelling.',
    socials: ['𝕏', 'in'],
    avatarStyle: { background: '#e6394422', borderColor: '#e63946', color: '#e63946' },
    delay: '',
  },
  {
    initials: 'KL', name: 'KLEO', role: 'Lead Developer',
    bio: 'Solidity engineer, previously built smart contracts for 3 top-50 NFT projects.',
    socials: ['𝕏', 'gh'],
    avatarStyle: { background: '#60a5fa22', borderColor: '#60a5fa', color: '#60a5fa' },
    delay: 'reveal-delay-1',
  },
  {
    initials: 'MX', name: 'MAXO', role: 'Art Director',
    bio: 'Digital artist with 8 years of experience in concept art and generative design systems.',
    socials: ['𝕏', 'ig'],
    avatarStyle: { background: '#4ade8022', borderColor: '#4ade80', color: '#4ade80' },
    delay: 'reveal-delay-2',
  },
  {
    initials: 'RY', name: 'RYUU', role: 'Community Lead',
    bio: 'Built NFT communities of 50K+ members. Expert in Discord, events, and holder strategy.',
    socials: ['𝕏', 'in'],
    avatarStyle: { background: '#c084fc22', borderColor: '#c084fc', color: '#c084fc' },
    delay: 'reveal-delay-3',
  },
];

export default function Team() {
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
    <section id="team">
      <span className="section-tag reveal" ref={(el) => (revealRefs.current[0] = el)}>The Builders</span>
      <h2 className="section-title reveal" ref={(el) => (revealRefs.current[1] = el)}>MEET THE<br />TEAM</h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <div className={`team-card reveal ${m.delay}`} key={m.name} ref={(el) => (revealRefs.current[2 + i] = el)}>
            <div className="team-avatar" style={m.avatarStyle}>{m.initials}</div>
            <div className="team-name">{m.name}</div>
            <div className="team-role">{m.role}</div>
            <div className="team-bio">{m.bio}</div>
            <div className="team-socials">
              {m.socials.map((s) => (
                <a href="#" className="social-btn" key={s}>{s}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
