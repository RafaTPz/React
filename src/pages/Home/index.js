import React from 'react';
import { ContainerPage, TitlePage } from "../../components/Main";
import { AreaHome } from "./styled";

const Page = () => {
    return (
        <ContainerPage>
            <AreaHome>
            <TitlePage>Welcome to the Dylanx, the biggest White Tiger</TitlePage>
            <div className="tigerimg"><img src="/tigrao.png" /></div>
            </AreaHome>
        </ContainerPage>
        
    );
}

export default Page;