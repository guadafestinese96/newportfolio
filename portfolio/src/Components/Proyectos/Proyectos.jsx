import styled from "styled-components";
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
import UnCarouselComponent from "./UnCarouselComponent";

const imagesWidi = [widi1, widi2, widi3, widi4, widi5, widi6, widi7, widi8];
const imagesChupitraki = [chupitraki1, chupitraki2, chupitraki3, chupitraki4];
const imagesWidiDw = [widiDw1, widiDw2, widiDw3, widiDw4, widiDw5, widiDw6, widiDw7];
const imagesChupitrakiNoCart = [chupitrakiNoCart1, chupitrakiNoCart2, chupitrakiNoCart3, chupitrakiNoCart4,chupitrakiNoCart5];

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

@media (max-width: 400px){
font-size:15px;
}
`


export default function Proyectos() {

    return (
        <div>
            <Titles>Proyectos</Titles>
            <CarouselContainer>  

                <UnCarouselComponent images={imagesChupitrakiNoCart} title="Chupitraki" linkGithub={"https://github.com/guadafestinese96/distribuidorachupitraki/tree/main/chupitraki"} linkVercel={"https://distribuidorachupitraki.vercel.app/"}/>   
                     
                <UnCarouselComponent images={imagesWidi} title="Widistore con Carrito" linkGithub={"https://github.com/guadafestinese96/widistore"} linkVercel={"https://widistore.vercel.app/"}/>    

                <UnCarouselComponent images={imagesChupitraki} title="Chupitraki con Carrito" linkGithub={"https://github.com/guadafestinese96/chupitraki-page"} linkVercel={"https://distribuidora-chupitraki.vercel.app/"}/>    


                <UnCarouselComponent images={imagesWidiDw} title="Primera página de Widistore" linkGithub={"https://github.com/guadafestinese96/widistore.page"} linkVercel={"https://guadafestinese96.github.io/widistore.page/"}/>        

            

            </CarouselContainer>
        </div>

    )
}

