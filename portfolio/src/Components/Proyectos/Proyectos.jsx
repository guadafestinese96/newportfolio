import styled from "styled-components";
import UnCarouselComponent from "./UnCarouselComponent";
import CarouselHorizontal from "../Skills/CarouselHorizontal";
import widi1 from '../../assets/widi1.png';
import widi2 from '../../assets/widi2.png';
import widi3 from '../../assets/widi3.png';
import widi4 from '../../assets/widi4.png';
import widi5 from '../../assets/widi5.png';
import widi6 from '../../assets/widi6.png';
import widi7 from '../../assets/widi7.png';
import widi8 from '../../assets/widi8.png';
import chupitraki1 from '../../assets/chupitraki1.png';
import chupitraki2 from '../../assets/chupitraki2.png';
import chupitraki3 from '../../assets/chupitraki3.png';
import chupitraki4 from '../../assets/chupitraki4.png';
import widiDw1 from '../../assets/widi-dw1.jpg'
import widiDw2 from '../../assets/widi-dw2.jpg'
import widiDw3 from '../../assets/widi-dw3.jpg'
import widiDw4 from '../../assets/widi-dw4.jpg'
import widiDw5 from '../../assets/widi-dw5.jpg'
import widiDw6 from '../../assets/widi-dw6.jpg'
import widiDw7 from '../../assets/widi-dw7.jpg'
import chupitrakiNoCart1 from '../../assets/chupitraki-nocart1.jpg';
import chupitrakiNoCart2 from '../../assets/chupitraki-nocart2.jpg';
import chupitrakiNoCart3 from '../../assets/chupitraki-nocart3.jpg';
import chupitrakiNoCart4 from '../../assets/chupitraki-nocart4.jpg';
import chupitrakiNoCart5 from '../../assets/chupitraki-nocart5.jpg';
import widiJs1 from '../../assets/widiJs1.png';
import widiJs2 from '../../assets/widiJs2.png';
import widiJs3 from '../../assets/widiJs3.png';
import widiJs4 from '../../assets/widiJs4.png';
import widiJs5 from '../../assets/widiJs5.png';
import widiJs6 from '../../assets/widiJs6.png';
import widiJs7 from '../../assets/widiJs7.png';
import widiJs8 from '../../assets/widiJs8.png';
import widiJs9 from '../../assets/widiJs9.png';
import widiJs10 from '../../assets/widiJs10.png';
import desktop1 from '../../assets/desktop1.jpg'
import desktop2 from '../../assets/desktop2.jpg'
import desktop3 from '../../assets/desktop3.jpg'
import desktop4 from '../../assets/desktop4.jpg'
import desktop5 from '../../assets/desktop5.jpg'
import desktop6 from '../../assets/desktop6.jpg'



const imagesWidi = [widi1, widi2, widi3, widi4, widi5, widi6, widi7, widi8];
const imagesChupitraki = [chupitraki1, chupitraki2, chupitraki3, chupitraki4];
const imagesWidiDw = [widiDw1, widiDw2, widiDw3, widiDw4, widiDw5, widiDw6, widiDw7];
const imagesChupitrakiNoCart = [chupitrakiNoCart1, chupitrakiNoCart2, chupitrakiNoCart3, chupitrakiNoCart4, chupitrakiNoCart5];
const imagesWidiJS = [widiJs1, widiJs2, widiJs3, widiJs4, widiJs5, widiJs6, widiJs7, widiJs8, widiJs9, widiJs10];
const desktopImgs = [desktop1, desktop2, desktop3, desktop4, desktop5, desktop6];

const CarouselContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`

const Titles = styled.h1`
font-size: 25px;
margin-top:20px;
text-transform: uppercase;
background-color:antiquewhite;
width:100%;
text-align:center;
margin-bottom:20px;

@media (max-width: 400px){
font-size:15px;
}
`

const CarouselHorizontalContainer = styled.div`

`

const ProyectosContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const TitleProyecto = styled.h2`
font-size:15px;
`


export default function Proyectos() {

    return (
        <ProyectosContainer>
            <Titles>Proyectos</Titles>
            <CarouselContainer>
                
                <UnCarouselComponent images={imagesChupitrakiNoCart} title="Chupitraki" linkGithub={"https://github.com/guadafestinese96/distribuidorachupitraki/tree/main/chupitraki"} linkPage={"https://distribuidorachupitraki.vercel.app/"} />

                <UnCarouselComponent images={imagesWidi} title="Widistore con Carrito" linkGithub={"https://github.com/guadafestinese96/widistore"} linkPage={"https://widistore.vercel.app/"} />

                <UnCarouselComponent images={imagesChupitraki} title="Chupitraki con Carrito" linkGithub={"https://github.com/guadafestinese96/chupitraki-page"} linkPage={"https://distribuidora-chupitraki.vercel.app/"} />

                <UnCarouselComponent images={imagesWidiDw} title="Primera página de Widistore" linkGithub={"https://github.com/guadafestinese96/widistore.page"} linkPage={"https://guadafestinese96.github.io/widistore.page/"} />
                
            </CarouselContainer>


            <CarouselHorizontalContainer>
                    
                    <CarouselHorizontal images={imagesWidiJS} linkGithub={"https://github.com/guadafestinese96/proyectoJS"} linkPage={"https://guadafestinese96.github.io/proyectoJS/"} titleProyecto="Widistore curso Javascript"/>

                    
                    <CarouselHorizontal images={desktopImgs} linkPage={"https://guadafestinese96.github.io/widistore.page/index.html"} linkGithub={"https://github.com/guadafestinese96/widistore.page"} titleProyecto="Widistore curso Desarrollo Web"/>
            </CarouselHorizontalContainer>
        </ProyectosContainer>

    )
}

