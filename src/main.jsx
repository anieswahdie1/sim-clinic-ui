import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import pageRouter from "./routes/index.jsx";
import { StrictMode } from "react";
import { ConfigProvider } from "antd";
import ConfigAntdThemes from "./config/ConfigAntdThemes.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider theme={ConfigAntdThemes}>
      <RouterProvider router={pageRouter} />
    </ConfigProvider>
  </StrictMode>
);
