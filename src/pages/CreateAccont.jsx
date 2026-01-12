export default function CreateAccount() {
  return (
    <>
      <div class="flex items-center p-4 pb-2 justify-between">
        <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Create Account
        </h2>
      </div>

      <div class="mb-6 flex flex-col items-center">
        <h1 class="text-white tracking-tight text-[28px] font-bold leading-tight text-center">
          Começe sua jornada no xadrez com o Chess Tutor AI !
        </h1>
        <p class="text-white/70 text-base font-normal leading-normal pt-1 text-center">
          Seu tutor pessoal de xadrez impulsionado por Inteligência Artificial!
        </p>
      </div>

      <div class="w-full max-w-md bg-white/5 dark:bg-[#19332a]/40 backdrop-blur-xl border border-white/10 dark:border-[#326754]/50 rounded-xl p-6 space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-white text-sm font-medium leading-normal pl-1">
            Username
          </p>
          <div class="flex w-full items-stretch rounded-lg group">
            <div class="text-white/50 group-focus-within:text-primary flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span class="material-symbols-outlined text-[20px]">person</span>
            </div>
            <input
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none text-white focus:outline-0 focus:ring-0 border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] focus:border-primary h-14 placeholder:text-white/30 p-[15px] text-base font-normal leading-normal"
              placeholder="Magnus Carlsen"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-white text-sm font-medium leading-normal pl-1">
            Email Address
          </p>
          <div class="flex w-full items-stretch rounded-lg group">
            <div class="text-white/50 group-focus-within:text-primary flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span class="material-symbols-outlined text-[20px]">mail</span>
            </div>
            <input
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none text-white focus:outline-0 focus:ring-0 border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] focus:border-primary h-14 placeholder:text-white/30 p-[15px] text-base font-normal leading-normal"
              placeholder="magnus@grandmaster.com"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-white text-sm font-medium leading-normal pl-1">
            Password
          </p>
          <div class="flex w-full items-stretch rounded-lg group">
            <div class="text-white/50 group-focus-within:text-primary flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span class="material-symbols-outlined text-[20px]">lock</span>
            </div>
            <input
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none rounded-r-none border-r-0 text-white focus:outline-0 focus:ring-0 border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] focus:border-primary h-14 placeholder:text-white/30 p-[15px] text-base font-normal leading-normal"
              placeholder="••••••••"
              type="password"
            />
            <div class="text-white/50 flex border border-white/10 dark:border-[#326754] bg-white/5 dark:bg-[#19332a] items-center justify-center pr-4 rounded-r-lg border-l-0 cursor-pointer hover:text-white">
              <span class="material-symbols-outlined text-[20px]">
                visibility
              </span>
            </div>
          </div>
        </div>
        <div class="pt-4">
          <button class="w-full h-14 bg-primary text-[#10221c] font-bold text-lg rounded-xl glow-button hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            Create Account
            <span class="material-symbols-outlined">trending_flat</span>
          </button>
        </div>
        <div class="pt-2 text-center">
          <p class="text-white/60 text-sm">
            Already have an account?
            <a class="text-primary font-bold hover:underline" href="#">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
