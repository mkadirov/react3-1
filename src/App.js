import './App.css';
import Connect from './sections/connect/Connect';
import Header from './sections/header/Header';
import Main from './sections/main';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Connect/>
    </>
  );
}

export default App;
