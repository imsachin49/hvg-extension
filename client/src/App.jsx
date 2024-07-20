
import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="App">
      <div className='w-full flex p-5 gap-5'>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
};

export default App;