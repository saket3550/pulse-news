import { NavLink, Link } from "react-router-dom";
import { CATEGORIES } from "../data/news.js";

export default function Header() {
  return (
    <header className="head">
      <div className="wrap head-in">
        <Link to="/" className="logo">Pulse<span>News</span></Link>
        <nav aria-label="Categories">
          <NavLink to="/" end>Top</NavLink>
          {CATEGORIES.map((c) => (
            <NavLink key={c} to={`/category/${c}`}>{c[0].toUpperCase() + c.slice(1)}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
