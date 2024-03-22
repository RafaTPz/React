import React, { useState } from 'react';
import { ContainerPage, TitlePage } from "../../components/Main";
import { AreaHome } from "./styled";
import { useNavigate } from 'react-router-dom';
import LoginPage from '../Loginpage';

const Page = () => {


    const [contador, setContador] = useState(0);
    
    const navigate = useNavigate();


    return (
        <ContainerPage>
            <AreaHome>
            <TitlePage>Welcome to the Dylanx, the biggest White Tiger</TitlePage>
            <div className="tigerimg"><img src="/tigrao.png" /></div>
            <br />
            <br />
            <button onClick={
                () => setContador(contador + 1)}>aumenta ai</button>

                <p>{contador}</p>
                <button onClick={() => navigate('/login')}>Logar carai</button>
            
            </AreaHome>
        </ContainerPage>
        
    );
}

export default Page;