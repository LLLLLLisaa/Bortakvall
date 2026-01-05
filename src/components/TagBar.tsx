import { Link } from "react-router-dom";
import type { Category } from "../types/Category";

/**
 * TagBar component
 *
 * Displays a category navigation bar based on screen size.
 *
 * - On large screens (desktop), categories are shown as a horizontal navigation bar.
 * - On small and medium screens (mobile/tablet), categories are shown in a dropdown menu.
 * - Categories are provided via props and are dynamically generated from API data.
 * - Each category links to its corresponding tag page.
 *
 * This component is purely presentational and does not fetch or manage data itself.
 */

type TagBarProps = {
  categories: Category[];
};

export function TagBar({ categories }: TagBarProps) {
  return (
    <nav className="container my-3">

      {/* ===== Desktop / Large screens ===== */}
      <ul className="nav justify-content-center gap-3 d-none d-lg-flex">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            All products
          </Link>
        </li>

        {categories.map(tag => (
          <li key={tag.name} className="nav-item">
            <Link className="nav-link" to={`/tags/${tag.id}`}>
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* ===== Mobile / Tablet ===== */}
      <div className="dropdown d-lg-none text-center">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>

        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/">
              All products
            </Link>
          </li>

          {categories.map(tag => (
            <li key={tag.name}>
              <Link
                className="dropdown-item"
                to={`/tags/${tag.id}`}
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
