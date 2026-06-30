import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient.ts";
import App from "./App.tsx";
import "./index.css";

// 1280px : 데스크탑 크기
// 1024px : 노트북 크기
// 767px : 태블릿 크기
// 376px : 모바일 크기

const rootNode = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootNode).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);