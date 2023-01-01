import BoardButton from './components/BoardButton'
import ColorButton from './components/ColorButton'
import Board from './components/Board'
import { Header } from './components/Header'
import { GlobalStyle } from './components/GlobalStyle'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header>MASTERMIND</Header>
      <Board />
    </div>
  );
}

export default App;
