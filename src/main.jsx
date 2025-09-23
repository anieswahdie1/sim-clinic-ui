import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import pageRouter from "./routes";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={pageRouter} />
  </StrictMode>
);
