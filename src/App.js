import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";
import PostUpdatePage from "./pages/PostUpdatePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<PostWritePage />} />
      <Route path="/" element={<PostListPage />} />
      <Route path="/detail" element={<PostDetailPage />} />
      <Route path="/update" element={<PostUpdatePage />} />
    </Routes>
  );
}

export default App;
