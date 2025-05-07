import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fontAwesome";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading.tsx";
import AppRoutes from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
