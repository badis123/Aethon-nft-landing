import { useState, useEffect, useRef } from 'react';

const faqs = [
  { q: 'What blockchain is AETHON on?', a: 'AETHON is deployed on Ethereum using the ERC-721A standard, allowing for cheaper batch minting and reduced gas fees for our community.' },
  { q: 'How do I mint an AETHON NFT?', a: 'Connect your MetaMask or WalletConnect wallet, click "Mint Now", choose how many you want (max 5 per wallet), and confirm the transaction. Each NFT costs 0.08 ETH + gas.' },
  { q: 'What is the mint price and supply?', a: 'The public mint price is 0.08 ETH. Total supply is 10,000 unique AETHON warriors. Whitelist price was 0.06 ETH. There are 100 reserved for the team and giveaways.' },
  { q: 'What are the holder benefits?', a: 'Holders get full commercial IP rights, access to the DAO, $VOID token staking rewards, exclusive merch drops, IRL event tickets, and priority access to all future AETHON collections.' },
  { q: 'Will there be a whitelist / presale?', a: 'Yes — 2,000 spots are reserved for our whitelist. Join our Discord and follow our Twitter to participate in whitelist giveaways and community challenges to earn a spot.' },
  { q: 'Where can I trade AETHON after mint?', a: 'AETHON NFTs will be tradeable on OpenSea, Blur, and LooksRare immediately after mint. We enforce a 5% creator royalty on all secondary sales to fund ongoing development.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <span className="section-tag reveal" ref={(el) => (revealRefs.current[0] = el)}>Got Questions?</span>
      <h2 className="section-title reveal" style={{ textAlign: 'center' }} ref={(el) => (revealRefs.current[1] = el)}>FAQ</h2>
      <div className="faq-grid">
        {faqs.map((faq, i) => (
          <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={faq.q}>
            <div className="faq-question" onClick={() => toggle(i)}>
              {faq.q}
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
