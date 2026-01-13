import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClasses =
      "flex flex-col items-center gap-1 transition-colors cursor-pointer p-2";

    const activeClasses = "text-primary font-semibold";

    const inactiveClasses = "text-slate-500 hover:text-primary";

    if (location.pathname === path) {
      return `${baseClasses} ${activeClasses}`;
    }
    return `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <nav className="fixed bottom-0 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-6 pt-2 z-40">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        <Link to="/analize" className={getLinkClass("/analize")}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Analyze</span>
        </Link>

        <Link to="/coach" className={getLinkClass("/coach")}>
          <span className="material-symbols-outlined">school</span>
          <span className="text-[10px] font-medium">Coach</span>
        </Link>

        <Link to="/games" className={getLinkClass("/games")}>
          <span className="material-symbols-outlined">database</span>
          <span className="text-[10px] font-medium">Games</span>
        </Link>
      </div>
    </nav>
  );
}
