import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const ChildrenContainer = styled.div`
padding-bottom: 80px;

`

export default function Layout({children}){
    return(
        <div>
            <Header/>
            <ChildrenContainer>{children}</ChildrenContainer>
            <Footer/>
        </div>
    )
}