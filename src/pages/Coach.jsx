import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Coach() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const [gameCount, setGameCount] = useState(0);
  const [aiReport, setAiReport] = useState("");
  const [loadingCount, setLoadingCount] = useState(true);
  const [loadingReport, setLoadingReport] = useState(false);

  useEffect(() => {
    if (!username) {
      navigate("/");
      return;
    }

    async function fetchGameCount() {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/${username}/games`,
        );
        setGameCount(response.data.length);
      } catch (error) {
        console.error("Erro ao buscar contagem:", error);
      } finally {
        setLoadingCount(false);
      }
    }

    fetchGameCount();
  }, [username, navigate]);

  const handleGenerateReport = async () => {
    if (gameCount === 0) {
      alert(
        "Você precisa salvar pelo menos uma partida antes de gerar o relatório!",
      );
      return;
    }

    setLoadingReport(true);
    setAiReport("");

    try {
      const response = await axios.post(
        `http://localhost:8000/users/${username}/report`,
      );

      if (response.data.tutor_report) {
        setAiReport(response.data.tutor_report);
      } else {
        setAiReport(response.data.message || "Erro ao gerar resposta.");
      }
    } catch (error) {
      console.error("Erro na IA:", error);
      alert("Erro ao conectar com o Coach IA.");
    } finally {
      setLoadingReport(false);
    }
  };

  if (!username) return null;

  return (
    <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4 mx-auto">
      <div className="flex min-w-[110px] flex-1 flex-col gap-1 rounded-xl p-4 bg-primary/10 border border-primary/20">
        <p className="text-primary/70 text-xs font-medium uppercase tracking-wider">
          Total de Jogos Analisados
        </p>
        <p className="text-white text-2xl font-bold">
          {loadingCount ? "..." : `${gameCount} Partidas`}
        </p>
      </div>

      <div className="px-4 py-2">
        <button
          onClick={handleGenerateReport}
          disabled={loadingReport || gameCount === 0}
          className="pulse-glow flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-primary to-[#0d8a61] text-background-dark gap-3 text-base font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingReport ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin material-symbols-outlined">
                sync
              </span>
              Analisando seus jogos...
            </span>
          ) : (
            <>
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="truncate">
                Gerar relatório completo do seu perfil
              </span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-6">
        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
          relatório do coach
        </h2>
        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
          melhore com a ia
        </span>
      </div>

      <div className="flex flex-col items-center justify-center py-6 gap-8 min-h-[300px]">
        {aiReport ? (
          <div className="w-full bg-slate-900/50 rounded-xl p-6 border border-white/10 text-white/90 text-sm leading-relaxed whitespace-pre-wrap animate-in fade-in duration-700">
            {aiReport}
          </div>
        ) : (
          <>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-background-dark/80 p-6 rounded-full border border-primary/30 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>
              </div>
            </div>
            <div className="flex max-w-[280px] flex-col items-center gap-3">
              <p className="text-white text-xl font-bold leading-tight text-center">
                Análise completa de seus jogos com IA
              </p>
              <p className="text-white/50 text-xs text-center">
                Clique no botão acima para gerar um plano de treino
                personalizado baseado no seu histórico.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
