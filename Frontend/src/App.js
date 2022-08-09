import './App.css'
import MainSection from './components/MainSection/MainSection';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className = "AppGlass">
          <Sidebar/>
          <MainSection/>
        </div>
    </div>
  );
}

export default App;
