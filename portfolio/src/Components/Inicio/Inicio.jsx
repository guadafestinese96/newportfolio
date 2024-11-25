import Proyectos from "../Proyectos/Proyectos";
import Skills from '../Skills/Skills'
import styled from "styled-components";
import Contact from "./Contact";
import memojiImg from '../../assets/memoji.png'
import './Inicio.css'

const TitleIndex = styled.h1`
  font-family: "Monoton", sans-serif;
  font-weight: 400;
  padding:5px;
  font-style: normal;
  font-size: 40px;
  text-shadow: 2px 2px 1px white;
  @media (max-width: 400px){
  font-size: 25px;
  }
`
const TitleDev = styled.h2`
color: black;
padding: 5px;
font-size: 20px;
letter-spacing: 0.1em;
text-shadow: 1px 3px 1px antiquewhite;
text-transform: uppercase;

@media (max-width: 400px){
  font-size: 15px;
  }
`
const IndexDiv = styled.div`
display:flex; 
justify-content:center;
align-items:center;
flex-direction:column;
`

const IndexImg = styled.img`
width:180px;
margin:10px;
background-color: rgb(0,0,0,0.2);
filter:drop-shadow(5px 5px 1px white);
@media (max-width: 400px){
  width: 150px;
  }
`
const DescriptionDiv = styled.div`
width: 600px;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
const PresentacionP = styled.div`
text-align: justify;
// background-color: rgb(250,235,215, 0.7);
background-color: rgb(0,0,0,0.3);
color:antiquewhite;
padding: 10px;
border-radius: 10px;
margin: 10px;
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 600px){
width: 400px;
}

@media (max-width: 400px){
width: 320px;
font-size: 12px;
}

`
const ContactDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export default function Inicio() {
  return (
    <div className="inicio">
      <IndexDiv>
        <ContactDiv>
          <TitleIndex>Guadalupe Festinese</TitleIndex>
          <IndexImg className="voltear" src={memojiImg} alt='memojiImg' />
        </ContactDiv>

        <DescriptionDiv>
          <TitleDev>Frontend Developer - React JS</TitleDev>
          <PresentacionP>Me gusta resolver problemas complejos de manera eficiente y siempre estoy en busca de nuevas tecnologías y herramientas para mejorar mis habilidades. Mi objetivo es construir aplicaciones que sean visualmente atractivas y también fáciles de utilizar y mantener. Estoy trabajando en proyectos personales para fortalecer mis habilidades y prepararme para poder aportarlas en un nuevo empleo. Tengo una gran capacidad de resolución de problemas, siempre busco la manera de llegar al objetivo establecido en el menor tiempo posible. Soy buena trabajando sola y en equipo, me adapto muy rápido.</PresentacionP>
          <Contact />
        </DescriptionDiv>

      </IndexDiv>
    </div>

  )
}