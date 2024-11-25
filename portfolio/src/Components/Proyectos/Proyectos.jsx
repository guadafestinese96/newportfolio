import Carousel from "./Carousel"
import { Link } from "react-router-dom";
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
import imgLink from '../../assets/enlace.png'
import widiDw1 from '../../assets/widi-dw1.jpg'
import widiDw2 from '../../assets/widi-dw2.jpg'
import widiDw3 from '../../assets/widi-dw3.jpg'
import widiDw4 from '../../assets/widi-dw4.jpg'
import widiDw5 from '../../assets/widi-dw5.jpg'
import widiDw6 from '../../assets/widi-dw6.jpg'
import widiDw7 from '../../assets/widi-dw7.jpg'


const imagesWidi = [widi1, widi2, widi3, widi4, widi5, widi6, widi7, widi8];
const imagesChupitraki = [chupitraki1, chupitraki2, chupitraki3, chupitraki4];
const imagesWidiDw = [widiDw1, widiDw2, widiDw3, widiDw4, widiDw5, widiDw6, widiDw7];


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

const ImgLinks = styled.img`
width: 25px;
margin-left:3px;

`

const LinkContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin: 10px;
font-size:15px;
font-family: 
`
const LinksContainerAll = styled.div`
display:flex;
justify-content:center;
align-items:center
`
const UnCarousel = styled.div`
background-color: antiquewhite;
border-radius: 5px;
padding-top: 10px;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin: 10px;
border: 1px solid black;
`
const P = styled.p`
color:black;
`
export default function Proyectos() {

    return (
        <div>
            <Titles>Proyectos</Titles>
            <CarouselContainer>

                <UnCarousel>
                    <Carousel images={imagesWidi} />
                    <LinksContainerAll>
                        <Link to='https://github.com/guadafestinese96/widistore' target="_blank">
                            <LinkContainer >
                                <P>Code</P>
                                <ImgLinks src={imgLink} alt='imgLink' />
                            </LinkContainer>
                        </Link>
                        <Link to='https://widistore.vercel.app/' target="_blank">
                            <LinkContainer>
                                <P>Page</P>
                                <ImgLinks src={imgLink} alt='imgLink' />
                            </LinkContainer>
                        </Link>
                    </LinksContainerAll>
                </UnCarousel>

                <UnCarousel>
                    <Carousel images={imagesChupitraki} />
                    <LinksContainerAll>
                        <Link to='https://github.com/guadafestinese96/chupitraki-page' target="_blank">
                            <LinkContainer>
                                <P>Code</P>
                                <ImgLinks src={imgLink} alt='imgLink' />
                            </LinkContainer>
                        </Link>
                        <Link to='https://distribuidora-chupitraki.vercel.app/' target="_blank">
                            <LinkContainer>
                                <P>Page</P>
                                <ImgLinks src={imgLink} alt='imgLink' />
                            </LinkContainer>
                        </Link>
                    </LinksContainerAll>
                </UnCarousel>

                <UnCarousel>
                    <Carousel images={imagesWidiDw} />
                    <LinksContainerAll>
                        <Link to='https://github.com/guadafestinese96/widistore.page' target="_blank">
                            <LinkContainer>
                                <P>Code</P>
                                <ImgLinks src={imgLink} alt='imgLink' />
                            </LinkContainer>
                        </Link>
                        <Link to='https://guadafestinese96.github.io/widistore.page/' target="_blank">
                            <LinkContainer>
                                <P>Page</P>
                                <ImgLinks src={imgLink} alt='imgLink' />
                            </LinkContainer>
                        </Link>
                    </LinksContainerAll>
                </UnCarousel>


            </CarouselContainer>
        </div>

    )
}

