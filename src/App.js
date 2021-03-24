import React from "react";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Shop } from "./components/Shop";
import { ContextProvider } from "./components/Context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
