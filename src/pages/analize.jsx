export default function Analize() {
  return (
    <>
      <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4">
        <div class="py-6">
          <h2 class="text-2xl font-bold leading-tight text-background-light">
            Seu tutor pessoal de xadrez impulsionado por Inteligência
            Artificial!
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px] text-primary">
              bolt
            </span>
            Comece a analisar suas partidas agora mesmo!
          </p>
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
                Paste Sample
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

        <section>
          <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-primary">
              description
            </span>
            <h3 class="text-lg font-bold text-background-light">
              Coach Report
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}
