// import logo from './logo.svg';
import './App.css';
import Mycarousal from './components/mycarousal/Mycarousal';
import { Mynavbar } from "./components/mynavbar/Mynavbar";
import TitleMessage from './components/titlemessage/TitleMessage';

function App() {
  return (
    <div >
      <Mynavbar />
      <Mycarousal />
      <TitleMessage />
    </div>
  );
}

export default App;
