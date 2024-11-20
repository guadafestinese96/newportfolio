import Proyectos from "../Proyectos/Proyectos";
import Skills from '../Skills/Skills'
import styled from "styled-components";
import Contact from "./Contact";

const TitleIndex = styled.h1`
  font-family: "Parisienne", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 55px;
  padding-top: 10px;
  text-shadow: 1px 1px 1px white;

  @media (max-width: 400px){
  font-size: 40px;
  }
`
const TitleDev = styled.h2`

color: black;
padding: 5px;
font-size: 25px;
letter-spacing: 0.1em;
text-shadow: 1px 3px 1px antiquewhite;

@media (max-width: 400px){
  font-size: 15px;
  }
`

export default function Inicio() {
    return (
        <div className="inicio">
            <TitleIndex>Guadalupe Festinese</TitleIndex>
            <TitleDev>Frontend Developer - React JS</TitleDev>
            <Contact/>
            <Proyectos />
            <Skills />
        </div>

    )
}