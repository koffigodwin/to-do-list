
import Grocery from './Grocery';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <main>
    <Grocery />
     <ToastContainer position='top-center'/>
    </main>
  );
}

export default App;
