import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage.tsx";
import OmMeg from "./components/omMeg/OmMeg.tsx";
import Hjem from "./components/hjem/Hjem.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hjem />,
      },
      {
        path: "/Om oss",
        element: <div>Om oss</div>,
      },
      {
        path: "/Om deg",
        element: (
          <OmMeg navn="Johnny Bakaas" bilde="f" omMegTekst="kake baker saker" />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
