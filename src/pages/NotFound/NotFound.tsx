import { Link } from "react-router-dom";

import PageHero from "../../components/sections/PageHero";
import { ROUTES } from "../../constants/routes";

const NotFound = () => {
  return (
    <PageHero
      title="404 — Page not found"
      description="The page you were looking for has moved or never existed. Let's get you back on track."
    >
      <Link
        to={ROUTES.HOME}
        style={{
          display: "inline-block",
          marginTop: "28px",
          padding: "12px 28px",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #ff6b35, #ffd93d)",
          color: "#0a0e27",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </PageHero>
  );
};

export default NotFound;
