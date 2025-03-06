import styled from "styled-components";
import Contact from "./Contact";
import memojiImg from "../../assets/memoji.png";
import "./Inicio.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copyImg from "../../assets/copy.png";
import Swal from "sweetalert2";

const TitleIndex = styled.h1`
  font-family: "Qwitcher Grypen", cursive;
  font-weight: 600;
  padding: 5px;
  font-style: normal;
  font-size: 70px;
  text-shadow: 5px 5px 1px antiquewhite;
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
const TitleDev = styled.h2`
  color: black;
  padding: 5px;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-shadow: 1px 3px 1px antiquewhite;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
const IndexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IndexImg = styled.img`
  width: 180px;
  margin: 10px;
  background-color: rgb(0, 0, 0, 0.2);
  filter: drop-shadow(5px 5px 1px white);
  @media (max-width: 400px) {
    width: 150px;
  }
`;
const DescriptionDiv = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const PresentacionP = styled.div`
  text-align: center;
  background-color: rgb(250, 235, 215, 0.9);
  color: black;
  font-weight: 500;
  width:100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    font-size: 13px;
    max-width:200px;
  }
`;
const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MailDiv = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;
const ImgCopy = styled.img`
  width: 20px;
  filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.5));
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;


const Banner = styled.div`
  
  padding: 50px;
  border-radius: 10px;
  
  @media (max-width: 500px) {
    max-width: 300px;
  }
`
  






export default function Inicio() {
  return (
    <div className="inicio">
      <IndexDiv>
        <ContactDiv>
          <TitleIndex>Guadalupe Festinese</TitleIndex>
          {/* <IndexImg className="voltear" src={memojiImg} alt='memojiImg' /> */}
        </ContactDiv>
        
        

        <DescriptionDiv>
          <TitleDev>Frontend Developer - React JS</TitleDev>
          <Banner className="banner">

        
          <PresentacionP>
            Desarrolladora frontend con experiencia en React.js, JavaScript,
            HTML5 y CSS3. Apasionada por crear aplicaciones web atractivas y
            funcionales, con habilidades en diseño responsivo, optimización del
            rendimiento y gestión de estados en React. Experiencia previa en
            atención al cliente y gestión de stock, con capacidad para resolver
            problemas de forma eficiente y trabajar en equipo. Busco
            oportunidades para aportar soluciones innovadoras en el desarrollo
            web.
          </PresentacionP>  
          </Banner>
        </DescriptionDiv>

        <MailDiv>
          <p>festinese.guadalupe@gmail.com</p>
          <CopyToClipboard text="festinese.guadalupe@gmail.com">
            <ImgCopy
              src={copyImg}
              alt="copyImg"
              onClick={() => {
                Swal.fire({
                  text: "Copiado",
                  width: 300,
                });
              }}
            />
          </CopyToClipboard>
        </MailDiv>
      </IndexDiv>
    </div>
  );
}
