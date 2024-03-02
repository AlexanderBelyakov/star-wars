import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';
import { Characters } from '../Characters/Characters';
import { Popup } from '../Popup/Popup';
import { useState } from 'react';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(null)

  function handleOpenPopup(card) {
    setPopupOpen(card)
    console.log(card)
  }
  
  function handleClosePopup() {
    setPopupOpen(null)
  }

  return (
    <div className="app">
      <Routes>
        <Route
        exact
        path="/"
        element = {
          <>
            <Header />
            <Main />
          </>
        }
        />
        <Route
        exact
        path="/characters"
        element = {
          <>
            <Header />
            <Characters onCardClick={handleOpenPopup}/>
          </>
        }
        />
        <Route
        path="*"
        element = {
          <NotFound />
        }
        />
      </Routes>
      <Popup card={isPopupOpen} close={handleClosePopup}/>
    </div>
  );
}

export default App;
