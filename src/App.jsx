import Header from './Header.jsx';
import Body from './Body.jsx'
import Footer from './Footer.jsx';
import { useState } from 'react';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainClass = `${menuOpen ? "max-h-[100vh]" :null} relative overflow-hidden`
  return (
    <div className={mainClass}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Body />
      <Footer />
    </div>
  )
}

export default App
