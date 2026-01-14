import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/");
      return;
    }

    async function fetchGames() {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/${username}/games`
        );
        setGames(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, [username, navigate]);

  if (!username) return null;

  return (
    <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4 mx-auto">
      <div className="flex items-center bg-slate-900/80 backdrop-blur-lg p-4 pb-4 justify-between shrink-0 z-10 rounded-t-xl">
        <h1 className="text-white text-2xl font-bold leading-tight tracking-tight">
          Salvar Jogos
        </h1>
      </div>

      <section className="mb-8">
        <div className="glass-card rounded-xl p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              PGN Input
            </h3>
            <button className="text-xs text-slate-400 flex items-center gap-1 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">
                content_paste
              </span>
              Colar
            </button>
          </div>
          <div className="relative group">
            <textarea
              className="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-primary/90 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-slate-600"
              placeholder="1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6..."
            ></textarea>
          </div>
          <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all emerald-glow active:scale-[0.98]">
            <span className="material-symbols-outlined">analytics</span>
            Analyze Game
          </button>
        </div>
      </section>

      <div className="flex items-center bg-slate-900/80 backdrop-blur-lg p-4 pb-4 justify-between shrink-0 z-10 rounded-t-xl">
        <h1 className="text-white text-2xl font-bold leading-tight tracking-tight">
          Jogos Salvos
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 space-y-3">
        {loading ? (
          [1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-card h-20 rounded-2xl animate-pulse"
            ></div>
          ))
        ) : games.length === 0 ? (
          <p className="text-slate-400 text-center mt-10">
            Nenhuma partida encontrada para {username}.
          </p>
        ) : (
          games.map((game) => (
            <div
              key={game.game_id}
              className="glass-card p-4 rounded-2xl flex items-center justify-between transition-all active:scale-[0.98] cursor-pointer hover:bg-slate-800/50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`size-10 rounded-full flex items-center justify-center border ${
                    game.played_as === "White"
                      ? "bg-slate-200 border-slate-300 text-slate-900"
                      : "bg-slate-900 border-slate-700 text-slate-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">
                    chess_pawn
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">
                      {game.opponent}
                    </span>
                    <span className="text-xs text-slate-400 font-mono border border-white/10 px-1 rounded">
                      {game.result}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">{game.date}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
