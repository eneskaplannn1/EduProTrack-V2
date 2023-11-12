import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./UI/FallBack.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <AuthProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
