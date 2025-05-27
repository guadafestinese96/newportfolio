import styled from "styled-components";
import CarouselFigma from "./CarouselFigma";
import { NavLink } from "react-router-dom";
import CarouselHorizontal from "./CarouselHorizontal";
import UnSkill from "./UnSkill";


const ContainerSkils = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-wrap:wrap;
  display: grid;
     grid-template-columns: repeat(7, 120px);
     grid-auto-rows: 100px;
     grid-gap: 2px;

   @media (max-width: 850px) {
     grid-template-columns: repeat(5, 120px);
   }

   @media (max-width: 620px) {
     grid-template-columns: repeat(3, 100px);
   }
`;
const ContainerAll = styled.div`
  margin: 5px 0px 5px 0px;
  padding: 5px;
  width: 100vw;
  border-bottom: 2px solid var(--colorPrimario);
  border-top: 2px solid var(--colorPrimario);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Titles = styled.h1`
  font-size: 25px;
  margin-top: 20px;
  text-transform: uppercase;
  background-color: antiquewhite;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Title2 = styled.h2`
  font-size: 15px;
  margin-bottom: 15px;
`;

const FigmaDescription = styled.p`
  color: black;
  text-align: center;
  border-radius: 5px;
  font-size: 11px;
  max-width: 300px;
`;


const skills = [
  {
    nombre: "React JS",
    img: "react.jpg"
  },{
    nombre: "Vite",
    img: "vite.jpg"
  },{
    nombre: "JS",
    img: "js.png"
  },{
    nombre: "CSS",
    img: "css.png"
  },{
    nombre: "HTML",
    img: "html.png"
  },{
    nombre: "SASS",
    img: "sass.png"
  },{
    nombre: "Auth0",
    img: "auth0.png"
  },{
    nombre: "APIs",
    img: "api.png"
  },{
    nombre: "Bootstrap",
    img: "bootstrap.png"
  },{
    nombre: "Firebase",
    img: "firebase.png"
  },{
    nombre: "Github",
    img: "github.png"
  },{
    nombre: "Node JS",
    img: "nodejs.png"
  },{
    nombre: "Tailwind",
    img: "tailwind.png"
  },{
    nombre: "Vercel",
    img: "vercel.png"
  },{
    nombre: "VSC",
    img: "Vscode.png"
  },{
    nombre: "Figma",
    img: "figma.png"
  },{
    nombre: "Corel",
    img: "corel.png"
  },{
    nombre: "Canva",
    img: "canva.png"
  },{
    nombre: "Formik",
    img: "formik.jpg"
  },{
    nombre: "NPM",
    img: "npm.jpg"
  },{
    nombre: "PHP",
    img: "php.png"
  }
]

export default function Skills() {
  return (
    <ContainerAll>
      <Titles>Skills</Titles>
      <ContainerSkils className="containerSkills">
        {skills.map((skill, index)=>(
          <UnSkill key={index} nombre={skill.nombre} img={skill.img}/>
          ))}
      </ContainerSkils>

      <Title2>Figma</Title2>
      <FigmaDescription>
        Proyecto de Coderhouse - Curso Javascript
      </FigmaDescription>
      <FigmaDescription>
        Maquetado para pantalla Iphone y Desktop PC
      </FigmaDescription>
      <CarouselFigma />
    </ContainerAll>
  );
}
