import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cajita from "./Cajita";
import Notes from "./notes";

function PonloTodo() {
  return Notes.map((x) => (
    <div>
      <Cajita key={x.key} title={x.title} content={x.content} />
    </div>
  ));
}

function App() {
  return (
    <div>
      <Header />
      <PonloTodo />
      <Footer />
    </div>
  );
}

export default App;
