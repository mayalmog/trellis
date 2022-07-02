import { HomePage } from "./views/home-page.jsx";
import { LoginSignup } from "./views/login-signup";
import { WorkspacePage } from "./views/workspace-page.jsx";
import { BoardPage } from "./views/board-page";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    label: "Homepage",
  },
  {
    path: "/auth/:mode",
    element: <LoginSignup />,
    label: "LoginSignup",
  },
  {
    path: "/workspace",
    element: <WorkspacePage />,
    label: "Workspace",
  },
  {
    path: "/board/:boardId/*",
    element: <BoardPage />,
    label: "Boards",
  },
];

export default routes;
