import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const FavPage = lazy(() => import("./pages/FavPage/FavPage"));

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/FavPage" element={<FavPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
