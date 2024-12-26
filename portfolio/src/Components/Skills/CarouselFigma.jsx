import iphone1 from '../../assets/iphone1.jpg'
import iphone2 from '../../assets/iphone2.jpg'
import iphone3 from '../../assets/iphone3.jpg'
import iphone4 from '../../assets/iphone4.jpg'
import iphone5 from '../../assets/iphone5.jpg'
import iphone6 from '../../assets/iphone6.jpg'
import desktop1 from '../../assets/desktop1.jpg'
import desktop2 from '../../assets/desktop2.jpg'
import desktop3 from '../../assets/desktop3.jpg'
import desktop4 from '../../assets/desktop4.jpg'
import desktop5 from '../../assets/desktop5.jpg'
import desktop6 from '../../assets/desktop6.jpg'
import Carousel from '../Proyectos/Carousel';
import styled from 'styled-components'
import CarouselHorizontal from './CarouselHorizontal'


const iphoneImgs = [iphone1, iphone2, iphone3, iphone4, iphone5, iphone6];
const desktopImgs = [desktop1, desktop2, desktop3, desktop4, desktop5, desktop6];

const IphoneContainer= styled.div`
width: 250px;
height: 374px;
background-color: antiquewhite;
border: 1px solid black;
margin:10px;
border-radius:5px;
padding: 5px;

@media(max-width:400px){
width:200px;
}
`

const CarouselFigmaContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
export default function CarouselFigma() {

    return (
        <CarouselFigmaContainer>
            <IphoneContainer>
            <Carousel images={iphoneImgs}/>
            </IphoneContainer>
        
           
           <CarouselHorizontal images={desktopImgs} linkPage={"https://guadafestinese96.github.io/widistore.page/index.html"} linkGithub={"https://github.com/guadafestinese96/widistore.page"} titleProyecto="Widistore curso Desarrollo Web"/>
        
        </CarouselFigmaContainer>
    )
}