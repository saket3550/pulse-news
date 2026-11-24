import { useParams, Link } from "react-router-dom";
import { getByCategory } from "../services/newsService.js";
import { CATEGORIES } from "../data/news.js";
import { useAsync } from "../hooks.js";
import ArticleCard from "../components/ArticleCard.jsx";
import NotFound from "./NotFound.jsx";

export default function Category() {
  const { name } = useParams();
  const valid = CATEGORIES.includes(name);
  const { data, loading } = useAsync(() => (valid ? getByCategory(name) : Promise.resolve([])), [name]);

  if (!valid) return <NotFound />;
  return (
    <>
      <h1 className="page-title">{name[0].toUpperCase() + name.slice(1)}</h1>
      {loading ? <p className="state">Loading…</p> : data.length === 0 ? (
        <p className="state">No stories here yet. <Link to="/">See top headlines</Link></p>
      ) : (
        <div className="grid">{data.map((a) => <ArticleCard key={a.id} article={a} />)}</div>
      )}
    </>
  );
}
