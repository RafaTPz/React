import React from 'react';
import  {AreaHeader} from './styled';
import { Link } from 'react-router-dom';
function Header(){
    return (
          <AreaHeader>
            <div className="container">
              <div className="logo">
                LOGOMARCA
              </div>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/config">Configurações</Link></li>
                  <li>Sair</li>
                </ul>
              </nav>
            </div>
          </AreaHeader>
    );

    
}
export default Header;