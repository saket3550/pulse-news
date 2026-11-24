import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Article from "./pages/Article.jsx";
import NotFound from "./pages/NotFound.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Outlet />
      </main>
      <footer className="foot wrap">Pulse News · sample data for demonstration</footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
