import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import List from './List';
import Book from './Book';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>        
            <Route path="/" element={<Main />} /> 
            <Route path="/list" element={<List />} /> 
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
