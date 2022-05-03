import Navbar from './components/Navbar';
import Intro from  './components/Intro';
import AboutMe from './components/AboutMe';
import ProjectRepos from './components/ProjectRepos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Intro />
      <div id="about-me-scroll" className="page-spacer"></div>
      <AboutMe />
      <div id="deployed-projects-scroll" className="page-spacer"></div>
      <ProjectRepos />
      <div className="page-spacer"></div>
      <Footer/>
    </div>
  );
}

export default App;
