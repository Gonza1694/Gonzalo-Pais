import './App.css';
import Container from '@mui/material/Container'
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <Container>
      <NavBar />
      {/* <div className="container">
      <ItemListContainer />
      </div> */}
      <ItemDetailContainer />
    </Container>
  );
}

export default App;
