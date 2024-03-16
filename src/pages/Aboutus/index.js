import React from 'react';
import { ContainerPage, TitlePage } from "../../components/Main"
import { AreaAbout } from './styled';
const Page = () => {
    return (
        <ContainerPage>
            <TitlePage>About Us</TitlePage>
            <AreaAbout>
            <div className="containerAbout">
                <p> We are the biggest company of Seattle, Washington - United States of America<br/>
                    We started being a startup, but we get a giant Superavit and now we have 9 quadrilions </p>
            </div>
            </AreaAbout>
        </ContainerPage>
        
    );
}

export default Page;