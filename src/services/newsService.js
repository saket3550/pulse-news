import { ARTICLES } from "../data/news.js";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// Swap the body of this function for a real API call to go live.
export async function getArticles() {
  await delay(300);
  return ARTICLES;
}

export async function getArticle(id) {
  const all = await getArticles();
  return all.find((a) => a.id === id) ?? null;
}

export async function getByCategory(category) {
  const all = await getArticles();
  return all.filter((a) => a.category === category);
}
