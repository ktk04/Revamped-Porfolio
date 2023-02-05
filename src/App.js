import logo from './logo.svg';
import {About,Footer,Header,Skills,Work} from './container'
import {Navbar} from './components'
import AnimatedCursor from 'react-animated-cursor'
import './App.scss';
function App() {
  return (
    <div className="App">
    <AnimatedCursor
                    innerSize={10}
                    outerSize={30}
                    color='49, 59, 172'
                    outerAlpha={0.4}
                    innerScale={0.6}
                    outerScale={0}
      />
     <Navbar/>
     <Header/>
     <About/>
     <Skills/>
     <Footer/> 
    </div>
  );
}

export default App;
