export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between p-4 max-w-lg mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-background-light">
            chess_king_2
          </span>
          <h1 className="text-xl font-bold tracking-tight text-background-light">
            Chess Tutor AI
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-background-light">
              home
            </span>
          </button>
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-background-light">
              menu
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
