import "@fontsource/oswald";
import { Sheet } from "@mui/joy";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import LectureUseEffect from "./lectures/use-effect/index.tsx";
import ThemeProvider from "./providers/theme-provider.tsx";
import Css from "./lectures/css/css.tsx";
import TanstackQuery from "./lectures/tanstack-query/index.tsx";

export default function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter(
  [
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
        {
          path: "tanstack-query",
          element: <TanstackQuery />,
        },
      ],
    },
  ],
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    basename: (import.meta as any).env.BASE_URL || "/",
  }
);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider colorScheme="dark">
    <Sheet sx={{ height: "100%" }} variant="soft" className="dark">
      <RouterProvider router={router} />
    </Sheet>
  </ThemeProvider>
);
