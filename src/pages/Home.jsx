import { getArticles } from "../services/newsService.js";
import { useAsync } from "../hooks.js";
import BreakingTicker from "../components/BreakingTicker.jsx";
import ArticleCard from "../components/ArticleCard.jsx";

export default function Home() {
  const { data, loading, error } = useAsync(getArticles, []);
  if (loading) return <p className="state">Loading headlines…</p>;
  if (error) return <p className="state">Could not load headlines. Refresh to try again.</p>;

  const [top, ...rest] = data;
  return (
    <>
      <BreakingTicker items={data.filter((a) => a.breaking)} />
      <ArticleCard article={top} lead />
      <h3 className="section">Latest headlines</h3>
      <div className="grid">
        {rest.map((a) => <ArticleCard key={a.id} article={a} />)}
      </div>
    </>
  );
}
