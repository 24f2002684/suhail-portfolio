import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

export default function NotFound() {
  return (
    <AnimatedPage className="page-shell">
      <p className="kicker">404</p>
      <h1 className="mt-3 text-4xl font-bold">That page is not here.</h1>
      <p className="mt-4 max-w-xl text-slate-300">
        Use the navigation to return to the portfolio, projects, or achievements.
      </p>
      <Link className="btn btn-primary mt-8" to="/">
        Back Home
      </Link>
    </AnimatedPage>
  );
}
