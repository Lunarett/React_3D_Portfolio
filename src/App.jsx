import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacaks, Hero, Navbar, Works, StarsCanvas } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>Hello World</div>
    </BrowserRouter>
  )
}

export default App
