import router from "@/routes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        fontSize: 48,
        background: "#242424",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          margin: "0 auto",
        }}
      >
        {router.routes.map(({ path }) => {
          return (
            <li key={path}>
              <Link
                to={`${path}`}
                style={{
                  color: "white",
                }}
              >
                {path?.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
