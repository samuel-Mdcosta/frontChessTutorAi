import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAccount() {
  const navigate = useNavigate();

  // 1. Estado dos dados do formulário
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // 2. Estado para mostrar/esconder senha
  const [showPassword, setShowPassword] = useState(false);

  // 3. CORREÇÃO: O Estado de erro estava faltando!
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpa o erro ao digitar
    if (error) setError("");
  };

  const handleRegister = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos!");
      return;
    }

    try {
      // CORREÇÃO: Verifique se a rota é /register ou /auth/register (usei /auth/register baseado no seu backend anterior)
      const response = await axios.post("http://localhost:8000/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        alert("Conta criada com sucesso!");
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail);
      } else {
        setError("Erro ao conectar com o servidor.");
      }
    }
  };

  return (
    <>
      <div className="flex items-center p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Create Account
        </h2>
      </div>

      <div className="mb-6 flex flex-col items-center">
        <h1 className="text-white tracking-tight text-[28px] font-bold leading-tight text-center">
          Comece sua jornada no xadrez com o Chess Tutor AI !
        </h1>
        <p className="text-white/70 text-base font-normal leading-normal pt-1 text-center">
          Seu tutor pessoal de xadrez impulsionado por Inteligência Artificial!
        </p>
      </div>

      <div className="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4">
        {/* USERNAME */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-medium leading-normal pl-1">
            Username
          </p>
          <div
            className={`flex w-full items-stretch rounded-lg group ${
              error && error.toLowerCase().includes("usuário")
                ? "border border-red-500"
                : ""
            }`}
          >
            <div className="text-white/50 group-focus-within:text-primary flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-[20px]">
                person
              </span>
            </div>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none text-white focus:outline-0 focus:ring-0 border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] focus:border-primary h-14 placeholder:text-white/30 p-[15px] text-base font-normal leading-normal"
              placeholder="Magnus Carlsen"
              type="text"
            />
          </div>
          {error && error.toLowerCase().includes("usuário") && (
            <span className="text-red-500 text-xs font-medium pl-1 animate-pulse">
              {error}
            </span>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-medium leading-normal pl-1">
            Email Address
          </p>
          <div className="flex w-full items-stretch rounded-lg group">
            <div className="text-white/50 group-focus-within:text-primary flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none text-white focus:outline-0 focus:ring-0 border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] focus:border-primary h-14 placeholder:text-white/30 p-[15px] text-base font-normal leading-normal"
              placeholder="magnus@grandmaster.com"
              type="email"
            />
          </div>
          {error && error.toLowerCase().includes("email") && (
            <span className="text-red-500 text-xs font-medium pl-1 animate-pulse">
              {error}
            </span>
          )}
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-medium leading-normal pl-1">
            Password
          </p>
          <div className="flex w-full items-stretch rounded-lg group">
            <div className="text-white/50 group-focus-within:text-primary flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-[20px]">
                lock
              </span>
            </div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none rounded-r-none border-r-0 text-white focus:outline-0 focus:ring-0 border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] focus:border-primary h-14 placeholder:text-white/30 p-[15px] text-base font-normal leading-normal"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="text-white/50 flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pr-4 rounded-r-lg border-l-0 cursor-pointer hover:text-white"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </div>
          </div>
        </div>

        {/* Erro Genérico */}
        {error &&
          !error.toLowerCase().includes("usuário") &&
          !error.toLowerCase().includes("email") && (
            <div className="text-red-500 text-center text-xs bg-red-500/10 p-2 rounded border border-red-500/20">
              {error}
            </div>
          )}

        <div className="pt-4">
          <button
            onClick={handleRegister}
            className="w-full h-14 bg-primary text-[#10221c] font-bold text-lg rounded-xl glow-button hover:bg-primary/90 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            Criar Conta
            <span className="material-symbols-outlined">trending_flat</span>
          </button>
        </div>

        <div className="pt-2 text-center">
          <p className="text-white/60 text-sm">
            já possui uma conta?
            <a className="text-primary font-bold hover:underline ml-1" href="/">
              Entrar
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
