import { useParams, Link, useNavigate } from "react-router-dom";
import { getArticle } from "../services/newsService.js";
import { useAsync, timeAgo } from "../hooks.js";
import NotFound from "./NotFound.jsx";

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: a, loading } = useAsync(() => getArticle(id), [id]);

  if (loading) return <p className="state">Loading story…</p>;
  if (!a) return <NotFound />;
  return (
    <article className="story">
      <button className="back" onClick={() => navigate(-1)}>Back</button>
      {a.breaking && <span className="flag">Breaking</span>}
      <h1>{a.title}</h1>
      <p className="meta">
        <Link to={`/category/${a.category}`}>{a.category}</Link> · {a.source} · {timeAgo(a.publishedAt)}
      </p>
      <p className="dek">{a.summary}</p>
      {a.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
    </article>
  );
}
