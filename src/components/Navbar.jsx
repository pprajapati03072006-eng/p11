import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b border-white/10 bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500 text-xl font-bold">
            R
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Route<span className="text-indigo-400">Flow</span>
            </h2>
            <p className="text-xs text-slate-400">
              Smart React Navigation
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                pathname === link.path
                  ? "bg-indigo-500 text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;