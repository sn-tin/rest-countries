import Navbar from './components/Navbar';
import Main from './components/Main'
import { GlobalStyles } from './components/styles';

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
