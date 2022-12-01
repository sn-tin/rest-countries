import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import { GlobalStyles } from './styles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
