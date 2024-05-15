import logo from './logo.svg';
import './App.css';

function Header() {
  return (
      <header>
        <h1>Paro's Recipes</h1>
      </header>
  );
}

function Main(){
  return(
    <main>
      <p>Best recipes for quick and tasty food</p>
    </main>
  );
}

function Footer(){
  return(
    <footer>
      <p>Copyright &copy; 2024</p>
    </footer>
  );

}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
