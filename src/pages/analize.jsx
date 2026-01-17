import { useState } from "react";
import axios from "axios";

export default function Analize() {
  const [pgnInput, setPgnInput] = useState("");
  const [aiReport, setAiReport] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPgnInput(text);
    } catch (err) {
      console.error("Falha ao ler clipboard", err);
      alert("Erro ao colar. Use Ctrl+V.");
    }
  };

  const handleAnalyze = async () => {
    if (!pgnInput.trim()) {
      alert("Por favor, insira um PGN válido.");
      return;
    }

    setLoading(true);
    setAiReport("");

    try {
      const response = await axios.post(
        "http://localhost:8000/analyze",
        pgnInput,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        },
      );

      setAiReport(response.data);
    } catch (error) {
      console.error("Erro na análise:", error);
      alert("Erro ao conectar com a IA. Verifique se o servidor está rodando.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4 mx-auto">
        <div className="py-6">
          <h2 className="text-2xl font-bold leading-tight text-white">
            Seu tutor pessoal de xadrez impulsionado por Inteligência
            Artificial!
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">
              bolt
            </span>
            Comece a analisar suas partidas agora mesmo!
          </p>
        </div>

        <section className="mb-8">
          <div className="glass-card rounded-xl p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                Coloque seu PGN
              </h3>
              <button
                onClick={handlePaste}
                className="text-xs text-slate-400 flex items-center gap-1 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  content_paste
                </span>
                Colar
              </button>
            </div>

            <div className="relative group">
              <textarea
                value={pgnInput}
                onChange={(e) => setPgnInput(e.target.value)}
                className="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-primary/90 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-slate-600"
                placeholder="1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6..."
              ></textarea>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all emerald-glow active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined animate-spin">
                    sync
                  </span>
                  Analisando...
                </span>
              ) : (
                <>
                  <span className="material-symbols-outlined">analytics</span>
                  Analise do jogo
                </>
              )}
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">
              description
            </span>
            <h3 className="text-lg font-bold text-white">relatório do Coach</h3>
          </div>

          <div className="min-h-[100px] bg-slate-900/30 rounded-xl border border-white/5 p-4">
            {aiReport ? (
              <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-wrap animate-in fade-in">
                {aiReport}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 text-sm italic">
                O relatório da análise aparecerá aqui...
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
