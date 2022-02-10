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
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginCheckFB } from "./module/auth";
import { apiKey } from "./firebase";
import Permit from "./common/Permit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NotificationPage from "./pages/NotificationPage";
import CautionPage from "./pages/CautionPage";

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
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/write/:id" element={<PostWritePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/noti" element={<NotificationPage />} />
        <Route path="/caution" element={<CautionPage />} />
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
