
import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="App flex ">
      {/*Sidebar*/}
      <Sidebar/>
      {/* Main component */}
      <Main/>
    </div>
  );
};

export default App;