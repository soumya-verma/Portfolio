import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
