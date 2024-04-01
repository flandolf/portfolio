import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes/App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "@/routes/About.tsx";
import Projects from "./routes/Projects.tsx";
import Error404 from "./routes/404.tsx";
import RootGuidePage from "./routes/android-stuff/RootGuide.tsx";
import DriverPage from "./routes/android-stuff/DriverPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/rootguide" element={<RootGuidePage />} />
          <Route path="/drivers" element={<DriverPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
