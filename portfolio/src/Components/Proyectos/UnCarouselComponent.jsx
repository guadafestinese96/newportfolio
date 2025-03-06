import styled from "styled-components";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import imgLink from '../../assets/enlace.png';

const ImgLinks = styled.img`
width: 20px;
margin-left:3px;
`

const LinkContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin: 10px;
font-size:10px;
background-color: white;
padding: 5px;
border-radius: 10px;
color: white;
&:hover{
border: 1px solid black;
}
`
const LinksContainerAll = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const UnCarousel = styled.div`
background-color: antiquewhite;
border-radius: 10px;
padding-top: 10px;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
text-align: center;
margin: 10px;
border: 1px solid rgba(0,0,0,0.5);
`
const P = styled.p`
color:black;

&:hover{
font-weight: bold;
}
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




