import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import { GlobalStyles } from './styles';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Main />
    </div>
  );
}

export default App;
