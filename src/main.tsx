import "@fontsource/oswald";
import { Sheet } from "@mui/joy";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import LectureUseEffect from "./lectures/use-effect/index.tsx";
import ThemeProvider from "./providers/theme-provider.tsx";
import Css from "./lectures/css/css.tsx";

export default function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "use-effect",
        element: <LectureUseEffect />,
      },
      {
        path: "css/*",
        element: <Css />,
      }, 
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider colorScheme="dark">
    <Sheet sx={{ height: "100%" }} variant="soft" className="dark">
      <RouterProvider router={router} />
    </Sheet>
  </ThemeProvider>
);
