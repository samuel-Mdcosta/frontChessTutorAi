export default function Footer() {
  return (
    <nav className="fixed bottom-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-6 pt-2">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Analyze</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">school</span>
          <span className="text-[10px] font-medium">Coach</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">database</span>
          <span className="text-[10px] font-medium">Games</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
}
