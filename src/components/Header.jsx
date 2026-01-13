import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = (path) => {
    const baseClasses = "flex items-center gap-4 p-4 rounded-xl transition-all";

    const activeClasses = "text-emerald-500 bg-emerald-500/10 font-bold";

    const inactiveClasses =
      "text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/5";

    if (location.pathname === path) {
      return `${baseClasses} ${activeClasses}`;
    }
    return `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between p-4 max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              chess_king
            </span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Chess Tutor AI
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/analize"
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-900 dark:text-slate-100"
            >
              <span className="material-symbols-outlined">home</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-900 dark:text-slate-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed inset-y-0 right-0 w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 flex flex-col p-6 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-900 font-bold">
                query_stats
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              ChessTutor
            </span>
          </div>
          <button
            onClick={closeMenu}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* --- NAVEGAÇÃO DINÂMICA AQUI --- */}
        <nav className="flex-1 space-y-2">
          {/* Link para Analize */}
          <Link
            to="/analize"
            onClick={closeMenu}
            className={getLinkClass("/analize")}
          >
            <span className="material-symbols-outlined">search</span>
            <span>Analyze Game</span>
          </Link>

          {/* Link para Coach */}
          <Link
            to="/coach"
            onClick={closeMenu}
            className={getLinkClass("/coach")}
          >
            <span className="material-symbols-outlined">school</span>
            <span>AI Coach</span>
          </Link>

          <Link
            to="/games"
            onClick={closeMenu}
            className={getLinkClass("/games")}
          >
            <span className="material-symbols-outlined">database</span>
            <span>AI Coach</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
