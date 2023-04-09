import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import KazkaProvider from "./providers/KazkaProvider/KazkaProvider";
import NotificationProvider from "./providers/NotificationProvider/NotificationProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <KazkaProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </KazkaProvider>
  </React.StrictMode>
);
