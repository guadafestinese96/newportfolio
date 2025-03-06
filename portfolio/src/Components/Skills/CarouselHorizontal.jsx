import styled from 'styled-components';
import { useState } from 'react';
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
align-items:center
`

const P = styled.p`
color:black;
&:hover{
font-weight: bold;
}
`

const CarouselImg = styled.img`
    height: 300px;
    width: auto;
    border-radius: 10px;
    border: 1px solid var(--colorPrimario);
    padding: 5px;
    opacity: 0;
    transition: 0.2s;
    &.loaded{
        opacity: 1;
    }
    @media (max-width: 420px){
    height:100px;
    }
`

const CarouselButton = styled.button`
     background-color: black;
    color:white;
    height: 30px;
    border-radius: 50%;
    padding: 0px 10px 0px 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5px;
    border: none;
    &:hover{
    cursor:pointer;
    background-color: white;
    color: black;
    }
`
const CarouselContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;

`

const CarouselHorizontalContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:antiquewhite;
border: 1px solid black;
border-radius:5px;
padding: 5px;
margin: 20px;
`
const TitleProyecto = styled.h2`
font-size:15px;

`
export default function CarouselHorizontal({ images, linkGithub, linkPage, titleProyecto }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (selectedIndex, images, next = true) => {
        setLoaded(false)

        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1)
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex)
        }, 500)


    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
    }

    return (
        <CarouselHorizontalContainer>
            <TitleProyecto>{titleProyecto}</TitleProyecto>
            <CarouselContainer>
                <CarouselButton onClick={previous}>{"<"}</CarouselButton>
                <CarouselImg src={selectedImage} alt="." className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
                <CarouselButton onClick={next}>{">"}</CarouselButton>
            </CarouselContainer>

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


        </CarouselHorizontalContainer>
    )
}