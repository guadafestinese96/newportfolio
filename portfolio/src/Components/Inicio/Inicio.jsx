import styled from "styled-components";
import Contact from "../Footer/Footer";
import memojiImg from "../../assets/memoji.png";
import "./Inicio.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copyImg from "../../assets/copy.png";
import Swal from "sweetalert2";
import guadaImg from '../../assets/fotoCv.jpg';
import bannerImg from '../../assets/fondoHorizontalFino.jpg';

const TitleIndex = styled.h1`
  font-family: "Qwitcher Grypen", cursive;
  font-weight: 600;
  padding: 5px;
  font-style: normal;
  font-size: 70px;
  text-shadow: 5px 5px 1px var(--color-primario);

  @media (max-width: 600px) {
    font-size: 50px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
const TitleDev = styled.h2`
  color: #000;
  padding: 5px;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-shadow: 1px 3px 1px var(--color-primario);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 15px;
  }


  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const IndexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const PresentacionP = styled.div`
  text-align: center;
  background-color: var(--color-primario);
  color: #000;
  font-weight: 500;
  width:100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    max-width:700px;
    font-size:13px;
  }

   @media (max-width: 770px) {
    font-size: 13px;
    max-width:500px;
  }

  @media (max-width: 580px) {
    font-size: 13px;
    max-width:250px;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin:10px;
  width:100%;
`;

const MailDiv = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  margin-top:20px;
`;
const ImgCopy = styled.img`
  width: 20px;
  filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.5));
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;


  
const FotoGuada = styled.img`
width:130px;
border-radius: 10px;
border: 3px solid var(--color-primario);
padding: 5px;
margin-left:30px;

@media(max-width:600px){
width:90px;
}
`



export default function Inicio() {
  return (
      <IndexDiv>
        <ContactDiv>
          <div>
            <TitleIndex>Guadalupe Festinese</TitleIndex>
            <TitleDev>Web Developer Jr</TitleDev>
          </div>
          <div>
          <FotoGuada src={guadaImg} alt="fotoGuada" />
          </div>
          {/* <IndexImg className="voltear" src={memojiImg} alt='memojiImg' /> */}
        </ContactDiv>

        
        
        

        <DescriptionDiv>
          <PresentacionP>
          Desarrolladora web en formación con enfoque en frontend.
          <br/>Me destaco por mi persistencia, capacidad de resolver problemas rápidamente y motivación constante por aprender.
          <br/> Busco mi primera experiencia en tecnología para seguir creciendo y aportar valor a un equipo dinámico.
          </PresentacionP> 
        
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
        <button className="btnDownload">
          <a href="/CV_FestineseGuadalupe_dev_ats.pdf" download>DESCARGAR CV EN PDF</a>
        </button>
        
      </IndexDiv>
  );
}
