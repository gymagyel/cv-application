import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <main>
      <h1>My CV</h1>
      <GeneralInfo />
      <Education />
      <Experience/>
    </main>
  );
}

export default App;
