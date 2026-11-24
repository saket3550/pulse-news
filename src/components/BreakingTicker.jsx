import { Link } from "react-router-dom";

export default function BreakingTicker({ items }) {
  if (!items.length) return null;
  const loop = [...items, ...items];
  return (
    <section className="ticker" aria-label="Breaking news">
      <strong className="ticker-tag"><i /> Breaking</strong>
      <div className="ticker-track">
        <div className="ticker-move">
          {loop.map((a, i) => (
            <Link key={i} to={`/article/${a.id}`}>{a.title}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
