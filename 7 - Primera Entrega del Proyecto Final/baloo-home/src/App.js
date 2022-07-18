import './App.css';
import Container from '@mui/material/Container'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/Item-Detail/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/:category' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
