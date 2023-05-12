import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './img/logo.png';
import menu from './img/menu.png';
import list from './img/list_icon.png';
import mark from './img/mark_icon.png';

function Header() {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <header>      
      <div className="header_left">
        <ul>
          <li>
            <Link to="/"><img src={logo} /></Link>
          </li>
          <li>COZ Shopping</li>
        </ul>
      </div>      
      <div className="header_right">
        <div className="menu" onClick={toggleHandler}>
          <img src={menu} />
          <ul className={`menu_modal ${isOn ? "open" : ""}`}>
            <li>OOO님, 안녕하세요!</li>
            <li>
              <Link to="/list"><img src={list} />상품리스트 페이지</Link>
            </li>
            <li>
              <Link to="/book"><img src={mark} />북마크 페이지</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </header>
  );
}

export default Header;