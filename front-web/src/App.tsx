import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
