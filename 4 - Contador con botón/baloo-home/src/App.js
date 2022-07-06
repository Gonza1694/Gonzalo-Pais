import './App.css';
import Container from '@mui/material/Container'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <Container>
      <NavBar />
      <div className="container">
      <ItemListContainer />
      </div>
    </Container>
  );
}

export default App;
