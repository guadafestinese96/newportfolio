import Header from "../Header/Header";
import Contact from "../Inicio/Contact";
import styled from "styled-components";

const ChildrenContainer = styled.div`
padding-bottom: 50px;

`

export default function Layout({children}){
    return(
        <div>
            <Header/>
            <ChildrenContainer>{children}</ChildrenContainer>
            <Contact/>
        </div>
    )
}