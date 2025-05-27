import styled from 'styled-components';
import { useState } from 'react';

const CarouselImg = styled.img`
    height: 350px;
    width: 240px;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 10px;
    opacity: 0;
    transition: 0.2s;
    &.loaded{
        opacity: 1;
    }
    @media (max-width: 420px){
    width: 230px;
    height: 320px;
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

const CarouselTitle = styled.h1`
font-size: 15px;
color: black;
`

export default function Carousel({images, title}) {
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
        <div className="div">
        <CarouselTitle>{title}</CarouselTitle>
        <CarouselContainer>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselImg src={selectedImage} alt="." className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
            <CarouselButton onClick={next}>{">"}</CarouselButton>
        </CarouselContainer>
        </div>
    )
}