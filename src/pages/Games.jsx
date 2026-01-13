export default function Games() {
  return (
    <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4 mx-auto">
      <div className="flex items-center bg-slate-900/80 backdrop-blur-lg p-4 pb-4 justify-between shrink-0 z-10">
        <h1 className="text-white text-2xl font-bold leading-tight tracking-tight">
          Salvar Jogos para analise completa
        </h1>
      </div>
      <section class="mb-8">
        <div class="glass-card rounded-xl p-5 mb-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-bold uppercase tracking-wider text-primary">
              PGN Input
            </h3>
            <button class="text-xs text-slate-400 flex items-center gap-1 hover:text-white transition-colors">
              <span class="material-symbols-outlined text-sm">
                content_paste
              </span>
              Colar
            </button>
          </div>
          <div class="relative group">
            <textarea
              class="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-primary/90 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-slate-600"
              placeholder="1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6..."
            ></textarea>
          </div>
          <button class="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all emerald-glow active:scale-[0.98]">
            <span class="material-symbols-outlined">analytics</span>
            Analyze Game
          </button>
        </div>
      </section>
      <div className="flex items-center bg-slate-900/80 backdrop-blur-lg p-4 pb-4 justify-between shrink-0 z-10">
        <h1 className="text-white text-2xl font-bold leading-tight tracking-tight">
          Jogos Salvos
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 space-y-3">
        <div class="glass-card p-4 rounded-2xl flex items-center justify-between transition-all active:scale-[0.98] cursor-pointer">
          <div class="flex items-center gap-4">
            <div class="flex flex-col gap-0.5">
              <div class="flex items-center gap-2">
                <span class="font-bold text-white text-base">
                  Grandmaster_Alex
                </span>
                <span class="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">
                  Win
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
