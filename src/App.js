import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import { GlobalStyles } from './styles';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import CountryDetails from './components/Main/CountryDetails';

const App = () => {
  const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
  /* Fetch countries API */ 
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios(`https://restcountries.com/v3.1/all`);
        console.log(res.data);
        setCountries(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getCountries();
  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
          <GlobalStyles />
          <Navbar theme={theme} changeTheme={changeTheme} />
          <Routes>
            <Route index path="/" element={<Main countries={countries} />} />
            <Route path="/country" element={<Main countries={countries} />} />
            <Route path="/country/:slug" element={<CountryDetails countries={countries} />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
