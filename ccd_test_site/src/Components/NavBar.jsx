import React,{useState} from 'react';
import Logo from '../Media/imgs_edit.jpg';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/NavBar.css';

// Barra de navegacion
function NavBar() {
// Boton de menu
  const [openLinks, setOpenLinks] = useState(false);
  const toggleMenu = () => {setOpenLinks(!openLinks);}
  return (
    <div className='navbar'>
      <div className='nav_Icon' id={openLinks ? "open" : "close" }>
          {/* <img src='ccdlogo'/> */}
        {/* <object type="image/svg+xml" data={Logo}></object> */}
        <img src={Logo} />
        <div className='menu_Links'>
          <Link to="/">Inicio</Link>
          <Link to="/AboutPage">Eventos</Link>
          <Link to="/EventsPage">Eventos</Link>
          <Link to="/EventsPage">Eventos</Link>
          <Link to="/ExperiencePage">Experimenta</Link>
        </div>
      </div>
      <div className='nav_Links'>
        <Link to="/">Inicio</Link>
        <Link to="/AboutPage">Eventos</Link>
        <Link to="/EventsPage">Eventos</Link>
        <Link to="/ExperiencePage">Experimenta</Link>
        <button onClick={toggleMenu}>
          <MenuIcon/>
        </button>
      </div>
    </div>
  )
}
export default NavBar
