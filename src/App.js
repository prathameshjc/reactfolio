// import logo from './logo.svg';
import './App.css';
import Mycarousal from './components/mycarousal/Mycarousal';
import { Mynavbar } from "./components/mynavbar/Mynavbar";
import TitleMessage from './components/titlemessage/TitleMessage';
import About from './pages/about/About';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'
import bgimg from './assets/img/parallex/background.webp'
import { skills } from './pages/skills/skills.data';
import Skills from './pages/skills/Skills';
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Mynavbar />
      <Mycarousal />
      <TitleMessage />
      {/* About me section */}
      <div>
        <Parallax blur={{ min: -15, max: 15 }}
          bgImage={bgimg}
          bgImageAlt=""
          strength={-200}>
          <div>
            <Container className="container rounded">
              <Fade duration={2500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <hr />
      {/* skills section */}

        <Container >
          <Fade duration={2500}>
            <Skills />
          </Fade>
        </Container>
    </div>
  );
}

export default App;
