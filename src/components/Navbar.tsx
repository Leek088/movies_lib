import { useState, type ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = (): ReactElement => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e): void => setSearch(e.target.value)}
          placeholder="Buscar..."
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
