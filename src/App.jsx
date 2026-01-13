import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccont";
import Analize from "./pages/analize";
import Coach from "./pages/Coach";
import Games from "./pages/Games";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="analize" element={<Analize />} />
            <Route path="coach" element={<Coach />} />
            <Route path="games" element={<Games />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
