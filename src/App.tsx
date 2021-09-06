import React from "react";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./GlobalStyle";
import { MainLayout } from "./layout/MainLayout";

export default function App() {
  return (
    <div className="root">
      <RecoilRoot>
        <GlobalStyle></GlobalStyle>

        <MainLayout></MainLayout>
      </RecoilRoot>
    </div>
  );
}
