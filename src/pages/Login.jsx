export default function Login() {
  return (
    <div className="glass-card rounded-xl p-8 shadow-2xl mt-10">
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-white/70 text-sm font-medium ml-1">
            Email Address
          </label>
          <div className="relative">
            <input
              className="w-full h-14 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="name@example.com"
              type="email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-white/70 text-sm font-medium">
              Password
            </label>
            <a
              className="text-primary text-xs font-semibold hover:underline"
              href="#"
            >
              Forgot?
            </a>
          </div>

          <div className="relative flex items-center">
            <input
              className="w-full h-14 bg-slate-900/50 border border-slate-700 rounded-lg pl-4 pr-12 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Enter your password"
              type="password"
            />
            <span className="material-symbols-outlined absolute right-4 text-white/30 cursor-pointer hover:text-white/60">
              visibility
            </span>
          </div>
        </div>

        <button className="w-full h-14 bg-primary text-background-dark font-bold text-lg rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4 active:scale-[0.98]">
          Sign In
          <span className="material-symbols-outlined">login</span>
        </button>

        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Novo em Chess Tutor Ai?
            <a
              className="text-primary font-bold ml-1 hover:underline"
              href="/create-account"
            >
              Criar uma conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
