import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayouts() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden chess-pattern">
      <Header />

      <main className="max-w-lg mx-auto px-4 pb-24 pt-6 flex-grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
