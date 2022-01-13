
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
    <Navbar dark color="success">
      <div className="container">
        <NavbarBrand href="/">Pizza Shoperia</NavbarBrand>
      </div>
    </Navbar>

    <Menu />
    
  </div>

  
  );
}

export default App;
