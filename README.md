# Pulse News

React + Vite news app with breaking-news ticker, category pages and article pages.

## Run
```
npm install
npm run dev
```
Opens at http://localhost:5173

## Routes (react-router-dom)
| Path | Page |
|---|---|
| `/` | Home: breaking news, top story, latest headlines |
| `/category/:name` | Headlines for one category |
| `/article/:id` | Full article |
| `*` | Not found |

## Using real news
Headlines are sample data in `src/data/news.js`. To go live, change the body of
`getArticles()` in `src/services/newsService.js` to fetch from a news API
(e.g. NewsAPI, GNews) and map results to the same shape:
`{ id, title, summary, body, category, source, publishedAt, breaking }`.
