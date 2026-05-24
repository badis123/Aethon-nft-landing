import { useEffect, useRef } from 'react';

const phases = [
  {
    phase: 'Phase 01', title: 'Launch & Mint',
    items: ['Whitelist & public mint (10,000 NFTs)', 'OpenSea marketplace listing', 'Community Discord launch'],
    status: 'status-done', statusText: '✓ Completed', done: true, side: 'left',
  },
  {
    phase: 'Phase 02', title: 'Community Building',
    items: ['DAO governance launch & first votes', 'Holder-exclusive events & IRL meetups', '$VOID token airdrop to holders'],
    status: 'status-done', statusText: '✓ Completed', done: true, side: 'right',
  },
  {
    phase: 'Phase 03', title: 'Utility & Expansion',
    items: ['Staking platform & $VOID rewards live', 'Exclusive merch drops for holders', 'AETHON companion NFT collection'],
    status: 'status-progress', statusText: '▶ In Progress', done: false, side: 'left',
  },
  {
    phase: 'Phase 04', title: 'Metaverse & Beyond',
    items: ['3D AETHON avatars for the metaverse', 'Play-to-earn game integration', 'Brand licensing & IP expansion'],
    status: 'status-upcoming', statusText: '○ Upcoming', done: false, side: 'right',
  },
];

export default function Roadmap() {
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
    <section id="roadmap">
      <span className="section-tag reveal" ref={(el) => (revealRefs.current[0] = el)}>The Journey</span>
      <h2 className="section-title reveal" ref={(el) => (revealRefs.current[1] = el)}>ROAD<br />MAP</h2>

      <div className="roadmap-line">
        {phases.map((p, i) => (
          <div className="rm-item" key={p.phase}>
            {p.side === 'left' ? (
              <>
                <div className="rm-content reveal" ref={(el) => (revealRefs.current[2 + i] = el)}>
                  <div className="rm-phase">{p.phase}</div>
                  <div className="rm-title">{p.title}</div>
                  <ul className="rm-list">
                    {p.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <span className={`rm-status ${p.status}`}>{p.statusText}</span>
                </div>
                <div className="rm-dot-wrap"><div className={`rm-dot${p.done ? ' done' : ''}`} /></div>
                <div className="rm-spacer" />
              </>
            ) : (
              <>
                <div className="rm-spacer" />
                <div className="rm-dot-wrap"><div className={`rm-dot${p.done ? ' done' : ''}`} /></div>
                <div className="rm-content reveal" ref={(el) => (revealRefs.current[2 + i] = el)}>
                  <div className="rm-phase">{p.phase}</div>
                  <div className="rm-title">{p.title}</div>
                  <ul className="rm-list">
                    {p.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <span className={`rm-status ${p.status}`}>{p.statusText}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
