import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Menu } from './components/menu/Menu';

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <div>
        {/* Outlet: Aquí se renderizan los router children (las vistas de mapas, listas, etc) */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
