import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import { GlobalStyles } from './styles';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";

const App = () => {
  const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
  return (
    <div className="App">
      <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar theme={theme} changeTheme={changeTheme} />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
