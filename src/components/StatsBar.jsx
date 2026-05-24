const stats = [
  { num: '10K', label: 'Total Items' },
  { num: '3,847', label: 'Unique Owners' },
  { num: '0.08 Ξ', label: 'Mint Price' },
  { num: '14.2K Ξ', label: 'Total Volume' },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat-item" key={s.label}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
