import React ,{useState} from 'react'
import {FiMenu , FiX} from "react-icons/fi";
import './Navbar.css'

const Navbar = ( {navBarLinks}) => {
    const [menuClicked, setMenuClicked] = useState(false);
    const toggleMenuClick = () =>{
        setMenuClicked(!menuClicked);
    };
  return (

    <nav className="navbar">
        <span className="navbarlogo">EXPLORER</span>

        {menuClicked ?
        ( 
         <FiMenu size={25} className="navbarmenu" onClick={toggleMenuClick} />
        ): 
        ( 
        <FiX size={25} className="navbarmenu" onClick={toggleMenuClick} />
        )
        }
        <ul className={
            menuClicked ? "navbarlist" : "navbarlist navbarlist--active" 
        }
        >
         {navBarLinks.map((item) => {          
            return (
                <li className="navbaritem" key={item.title}>
                    <a className="navbarlink" href={item.url}>
                        {item.title}
                    </a>
                </li>
            );
          })}
        </ul>
    </nav>
    );
};

export default Navbar