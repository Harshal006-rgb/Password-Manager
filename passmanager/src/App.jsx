import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Manager from './components/Manager'

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <div className='mt-16'></div>
      <Manager />
      <Footer />
    </div>
  )
}

export default App