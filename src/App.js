import './App.css';
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Skills from "./component/skills/Skills";
import Projects from "./component/projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
