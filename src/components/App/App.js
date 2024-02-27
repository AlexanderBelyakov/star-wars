import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';

function App() {
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
    </div>
  );
}

export default App;
