import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Archived from "./pages/Archived";
import Home from "./pages/Home";
import Files from "./pages/Files";
import Starred from "./pages/Starred";
import AppLayout from "./ui/AppLayout";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="archived" element={<Archived />} />
            <Route path="home" element={<Home />} />
            <Route path="starred" element={<Starred />} />
            <Route path="files" element={<Files />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#374151",
              fontFamily: "'Poppins', sans-serif"
            },
          }}
        />
    </QueryClientProvider>
  );
}

export default App;
