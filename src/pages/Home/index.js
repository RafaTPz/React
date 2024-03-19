import React, { useState } from 'react';
import { ContainerPage, TitlePage } from "../../components/Main";
import { AreaHome } from "./styled";

const Page = () => {

    const [contador, setContador] = useState(0);

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
            
            </AreaHome>
        </ContainerPage>
        
    );
}

export default Page;