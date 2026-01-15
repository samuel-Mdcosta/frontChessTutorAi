import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  // Estados para os inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Estado para mostrar/esconder senha (Adicionei para ficar igual ao CreateAccount)
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha email e senha.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      // 1. Salva o username
      localStorage.setItem("username", response.data.username);

      // 2. MUDANÇA AQUI: Redireciona para a página de análise
      navigate("/analize");
    } catch (err) {
      // TRATAMENTO DO ERRO QUE ESTAVA QUEBRANDO O SITE
      if (err.response && err.response.data) {
        const detail = err.response.data.detail;

        // Se o erro for um texto simples (ex: "Senha incorreta"), mostramos ele
        if (typeof detail === "string") {
          setError(detail);
        } else if (Array.isArray(detail)) {
          // Se for erro 422 (validação), o FastAPI manda um array. Pegamos a msg do primeiro erro.
          // Ex: "value is not a valid email address"
          setError(
            detail[0].msg || "Dados inválidos. Verifique email e senha."
          );
        } else {
          setError("Erro desconhecido no login.");
        }
      } else {
        setError("Erro ao conectar com o servidor.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-xl p-8 shadow-2xl mt-10">
      <div className="space-y-6">
        {/* Input Email */}
        <div className="flex flex-col gap-2">
          <label className="text-white/70 text-sm font-medium ml-1">
            Email Address
          </label>
          <div className="relative">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="name@example.com"
              type="email"
            />
          </div>
        </div>

        {/* Input Password */}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 bg-slate-900/50 border border-slate-700 rounded-lg pl-4 pr-12 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Enter your password"
              // Lógica para mostrar/esconder senha
              type={showPassword ? "text" : "password"}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="material-symbols-outlined absolute right-4 text-white/30 cursor-pointer hover:text-white/60 select-none"
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 p-2 rounded-lg animate-pulse">
            {error}
          </div>
        )}

        {/* Botão de Login */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full h-14 bg-primary text-background-dark font-bold text-lg rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Entrando..." : "Sign In"}
          {!loading && <span className="material-symbols-outlined">login</span>}
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
