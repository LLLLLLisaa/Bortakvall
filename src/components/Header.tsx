import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const colors = ["#ff6f91", "#ff9671", "#ffc75f", "#845ec2", "#4d96ff"];

export function Header() {
  const title = "Bortakväll";
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header
      className="mb-4"
      style={{
        background: "linear-gradient(90deg,#F9D6DC)",
      }}
    >
        {/* Top bar */}
        <div style={{ backgroundColor: "#ffffff" }}>
            <div className="container d-flex justify-content-start align-items-center py-2">
                <Link
                    to="/cart"
                    className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                    style={{ fontSize: "1.1rem" }}
                >
                    <span style={{ fontSize: "1.4rem" }}>🛒</span>

                    {/* Text only on large screens */}
                    <span className="d-none d-lg-inline">
                    Kundvagn
                    </span>

                    {totalItems > 0 && (
                    <span className="badge rounded-pill bg-danger">
                        {totalItems}
                    </span>
                    )}
                </Link>
            </div>
        </div>

        <div className="container py-4 text-center position-relative">
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
