import './App.css';
import { Nav } from './components/layout/nav/Nav';
import { Home } from './pages/Home';
import { LiveStatus } from './pages/LiveStatus';
import Rewind from './pages/Rewind';

function App() {
  return (
    <div className="bg-cogAi-bg ">
        <Nav/>
        <Home/>
        {/* <Rewind/> 
        <LiveStatus/> */}
    </div>
  );
}

export default App;
