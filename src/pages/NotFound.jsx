import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="state">
      <h1 className="page-title">Page not found</h1>
      <p>That link may be old or mistyped. <Link to="/">Go to top headlines</Link></p>
    </div>
  );
}
