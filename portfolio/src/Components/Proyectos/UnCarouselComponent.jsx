import styled from "styled-components";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import imgLink from '../../assets/enlace.png';

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


export default function UnCarouselComponent({images, title, linkGithub, linkPage}) {
    return (
        <UnCarousel>
            <Carousel images={images} title={title} />
            <LinksContainerAll>
                <Link to={linkGithub} target="_blank">
                    <LinkContainer >
                        <P>Code</P>
                        <ImgLinks src={imgLink} alt='imgLink' />
                    </LinkContainer>
                </Link>
                <Link to={linkPage} target="_blank">
                    <LinkContainer>
                        <P>Page</P>
                        <ImgLinks src={imgLink} alt='imgLink' />
                    </LinkContainer>
                </Link>
            </LinksContainerAll>
        </UnCarousel>
    )
}




