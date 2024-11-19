import Proyectos from "../Proyectos/Proyectos";
import Skills from '../Skills/Skills'
import styled from "styled-components";
import Contact from "./Contact";

const TitleIndex = styled.h1`
  font-family: "Parisienne", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 45px;
  background-color:white;
  padding-top: 10px;
`
const TitleDev = styled.h2`
background-color:white;
color: antiquewhite;
padding: 5px;
font-size: 20px;
letter-spacing: 0.1em;
text-shadow: 1px 2px 1px black;
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