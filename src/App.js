import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Main from "./components/Main"
function App() {
  return (
    <div className="App">
      <header>
        <Top />
      </header>
      <main>
        <Main />
      </main>
      <footer >
        <Bottom />
      </footer>
    </div>
  );
}

export default App;
