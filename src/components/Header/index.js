import React from 'react';
import  {AreaHeader} from './styled';
import { Link } from 'react-router-dom';

function Header(){
    return (
          <AreaHeader>
            <div className="container">
              <div className="logo"><img src="/logotigre.png" />
              </div>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/config">Config</Link></li>
                  <li><Link to="/aboutus">Abt Us</Link></li>
                  <li>Leave</li>
                </ul>
              </nav>
            </div>
          </AreaHeader>
    );

    
}
export default Header;