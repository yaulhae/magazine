import {
  Link,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";
import PostUpdatePage from "./pages/PostUpdatePage";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginCheckFB } from "./module/auth";
import { apiKey } from "./firebase";
import Permit from "./common/Permit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NotificationPage from "./pages/NotificationPage";

export let history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      dispatch(loginCheckFB());
    }
  }, []);
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/" element={<PostListPage />} />
        <Route path="/detail/:id" element={<PostDetailPage />} />
        <Route path="/write/:id" element={<PostWritePage />} />
        <Route path="/noti" element={<NotificationPage />} />
      </Routes>
      <Permit>
        <Link
          style={{
            position: "fixed",
            bottom: "60px",
            right: "60px",
            fontSize: "3rem",
            color: "#1B9CFC",
          }}
          to="/write"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      </Permit>
    </HistoryRouter>
  );
}

export default App;
