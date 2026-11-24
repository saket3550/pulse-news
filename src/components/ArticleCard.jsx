import { Link } from "react-router-dom";
import { timeAgo } from "../hooks.js";

export default function ArticleCard({ article: a, lead = false }) {
  return (
    <article className={lead ? "card lead" : "card"} data-cat={a.category}>
      <Link to={`/category/${a.category}`} className="cat">{a.category}</Link>
      <h2><Link to={`/article/${a.id}`}>{a.title}</Link></h2>
      <p>{a.summary}</p>
      <small>{a.source} · {timeAgo(a.publishedAt)}</small>
    </article>
  );
}
