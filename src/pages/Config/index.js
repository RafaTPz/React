import React from 'react';
import { ContainerPage, TitlePage } from "../../components/Main"
import {AreaConfig} from "./styled.js"
const Page = () => {
    return (
        <ContainerPage>
            <TitlePage>Config</TitlePage>
            <AreaConfig>
            <div className="containerConfig">
               <p>For now, nothing on here</p>
            </div>
            </AreaConfig>
        </ContainerPage>
        
    );
}

export default Page;