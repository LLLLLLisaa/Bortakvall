import { Link } from "react-router-dom";

const colors = ["#ff6f91", "#ff9671", "#ffc75f", "#845ec2", "#4d96ff"];

export function Header() {
  const title = "Bortakväll";

  return (
    <header
      className="mb-4"
      style={{
        background: "linear-gradient(90deg, #ffe4ec, #f3e8ff)",
      }}
    >
      <div className="container py-4 text-center">
        <Link to="/" className="text-decoration-none">
          <h1
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: "3.2rem",
              margin: 0,
            }}
          >
            {title.split("").map((char, index) => (
              <span
                key={index}
                style={{ color: colors[index % colors.length] }}
              >
                {char}
              </span>
            ))}
          </h1>
        </Link>
      </div>
    </header>
  );
}
