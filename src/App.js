import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import { GlobalStyles } from './styles';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountriesCard from './components/Main/CountriesCard';

const App = () => {
  const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
          <GlobalStyles />
          <Navbar theme={theme} changeTheme={changeTheme} />
          <Routes>
            <Route path="/:slug" element={<CountriesCard />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
