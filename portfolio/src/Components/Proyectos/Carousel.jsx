import styled from 'styled-components';
import { useState } from 'react';

const CarouselImg = styled.img`
    height: 400px;
    width: 308px;
    border-radius: 10px;
    border: 1px solid var(--colorPrimario);
    padding: 5px;
    opacity: 0;

    transition: 0.5s;
    &.loaded{
        opacity: 1;
    }
`

const CarouselButton = styled.button`
    background-color: black;
    color:white;
    height: 30px;
    border-radius: 5px;
    padding: 3px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5px;
    border: 1px solid black;
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

export default function Carousel({images}) {
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
        <CarouselContainer>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselImg src={selectedImage} alt="." className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
            <CarouselButton onClick={next}>{">"}</CarouselButton>
        </CarouselContainer>
    )
}