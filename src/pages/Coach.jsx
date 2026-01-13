export default function Coach() {
  return (
    // Removi o fragmento <> desnecessário
    <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4 mx-auto">
      {/* CARD 1: Precisão */}
      <div className="flex min-w-[110px] flex-1 flex-col gap-1 rounded-xl p-4 bg-primary/10 border border-primary/20">
        <p className="text-primary/70 text-xs font-medium uppercase tracking-wider">
          precisão do seu perfil
        </p>
        <p className="text-white text-2xl font-bold">84.2%</p>
      </div>

      {/* CARD 2: Total de Jogos */}
      <div className="flex min-w-[110px] flex-1 flex-col gap-1 rounded-xl p-4 bg-primary/10 border border-primary/20">
        <p className="text-primary/70 text-xs font-medium uppercase tracking-wider">
          total de jogos
        </p>
        <p className="text-white text-2xl font-bold">12 Partidas</p>{" "}
        {/* Adicionei um valor aqui */}
      </div>

      {/* BOTÃO PRINCIPAL */}
      <div className="px-4 py-2">
        <button className="pulse-glow flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-primary to-[#0d8a61] text-background-dark gap-3 text-base font-bold transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="truncate">Generate Full AI Report</span>
        </button>
      </div>

      {/* CABEÇALHO DA ANÁLISE */}
      <div className="flex items-center justify-between px-4 pb-2 pt-6">
        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
          AI Analysis
        </h2>
        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
          melhore com a ia
        </span>
      </div>

      {/* ESTADO VAZIO / ÍCONE */}
      <div className="flex flex-col items-center justify-center py-12 gap-8">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative bg-background-dark/80 p-6 rounded-full border border-primary/30 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-primary text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }} // Correção do style para React
            >
              psychology
            </span>
          </div>
        </div>
        <div className="flex max-w-[280px] flex-col items-center gap-3">
          <p className="text-white text-xl font-bold leading-tight text-center">
            Analise completa de seu jogos com IA
          </p>
        </div>
        <span className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-white/10 text-white text-sm font-semibold border border-white/10 hover:bg-white/20">
          Begin Analysis
        </span>
      </div>
    </div>
  );
}
