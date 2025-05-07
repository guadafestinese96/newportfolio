import styled from "styled-components";
import apiImg from "../../assets/api.png";
import cssImg from "../../assets/css.png";
import htmlImg from "../../assets/html.png";
import jsImg from "../../assets/js.png";
import reactImg from "../../assets/react.jpg";
import sassImg from "../../assets/sass_5968358.png";
import viteImg from "../../assets/vite.jpg";
import auth0Img from "../../assets/auth0-rbg.png";
import bootstrapImg from "../../assets/bootstrap.png";
import firebaseImg from "../../assets/firebase.png";
import githubImg from "../../assets/github.png";
import nodeImg from "../../assets/nodejs.png";
import tailwindImg from "../../assets/tailwind-rbg.png";
import vercelImg from "../../assets/vercel-rbg.png";
import vscImg from "../../assets/Vscode.png";
import figmaImg from "../../assets/figma.png";
import corelImg from "../../assets/corel-rbg.png";
import canvaImg from "../../assets/canva-rbg.png";
import formikImg from "../../assets/formik.jpg";
import npmImg from "../../assets/npm.jpg";
import phpImg from "../../assets/php.png";
import CarouselFigma from "./CarouselFigma";
import { NavLink } from "react-router-dom";
import CarouselHorizontal from "./CarouselHorizontal";

const Imgs = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: white;
  border: 1px solid black;
  padding: 3px;
  border-radius: 5px;

  @media (max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`;

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

const DivSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 15px;
  @media (max-width: 620px) {
     font-size: 10px;
   }
`;

export default function Skills() {
  return (
    <ContainerAll>
      <Titles>Skills</Titles>
      <ContainerSkils className="containerSkills">
        <DivSkill>
          <Imgs src={reactImg} alt="reactImg" />
          <p>REACT.JS</p>
        </DivSkill>
        <DivSkill>
          <Imgs src={viteImg} alt="viteImg" />
          <p>VITE</p>
        </DivSkill>
        <DivSkill>
          <Imgs src={jsImg} alt="jsImg" />
          <p>JS</p>
        </DivSkill>
        <DivSkill>
          <Imgs src={cssImg} alt="cssImg" />
          <p>CSS</p>
        </DivSkill>
        <DivSkill>
          <Imgs src={htmlImg} alt="htmlImg" />
          <p>HTML</p>
        </DivSkill>
        <DivSkill>
          <Imgs src={sassImg} alt="sassImg" />
          <p>SASS</p>
        </DivSkill>
        <DivSkill>
          <Imgs src={apiImg} alt="apiImg" />
          <p>APIs</p>
        </DivSkill>

        <DivSkill>
            <Imgs src={auth0Img} alt="auth0Img" /> 
            <p>AUTH0</p>
        </DivSkill>
        
       
        <DivSkill>
            <Imgs src={bootstrapImg} alt="bootstrapImg" />
        <p>BOOTSTRAP</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={firebaseImg} alt="firebaseImg" />
            <p>FIREBASE</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={githubImg} alt="githubImg" />
            <p>GITHUB</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={nodeImg} alt="nodeImg" />
            <p>NODE.JS</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={tailwindImg} alt="tailwindImg" />
            <p>TAILWIND</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={vercelImg} alt="vercelImg" />
            <p>VERCEL</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={vscImg} alt="vscImg" />
            <p>VSC</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={figmaImg} alt="figmaImg" />
            <p>FIGMA</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={corelImg} alt="corelImg" />
            <p>COREL</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={canvaImg} alt="canvaImg" />
            <p>CANVA</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={formikImg} alt="formikImg" />
            <p>FORMIK</p>
        </DivSkill>
        
        <DivSkill>
            <Imgs src={npmImg} alt="npmImg" />
            <p>NPM</p>
        </DivSkill>
        
        <DivSkill>
          <Imgs src={phpImg} alt="phpImg" />
          <p>PHP</p>
        </DivSkill>
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
