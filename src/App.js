// import logo from './logo.svg';
import './App.css';
import Mycarousal from './components/mycarousal/Mycarousal';
import { Mynavbar } from "./components/mynavbar/Mynavbar";
import TitleMessage from './components/titlemessage/TitleMessage';
import About from './pages/about/About';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div >
      <Mynavbar />
      <Mycarousal />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
