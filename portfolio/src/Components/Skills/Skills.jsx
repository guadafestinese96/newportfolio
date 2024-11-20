import apiImg from '../../assets/api.png'
import cssImg from '../../assets/css.png'
import htmlImg from '../../assets/html.png'
import jsImg from '../../assets/js.png'
import reactImg from '../../assets/react.jpg'
import sassImg from '../../assets/sass_5968358.png'
import viteImg from '../../assets/vite.jpg'
import auth0Img from '../../assets/auth0-rbg.png'
import bootstrapImg from '../../assets/bootstrap.png'
import firebaseImg from '../../assets/firebase.png'
import githubImg from '../../assets/github.png'
import nodeImg from '../../assets/nodejs.png'
import tailwindImg from '../../assets/tailwind-rbg.png'
import vercelImg from '../../assets/vercel-rbg.png'
import vscImg from '../../assets/Vscode.png'
import figmaImg from '../../assets/figma.png'
import corelImg from '../../assets/corel-rbg.png'
import canvaImg from '../../assets/canva-rbg.png'
import styled from 'styled-components'


const Imgs = styled.img`
height: 40px;
width: 40px;
margin: 5px;
background-color:white;
border: 1px solid black;
padding: 3px;
border-radius: 5px;
`

const ContainerSkils = styled.div`

justify-content:center;
align-items:center;
display:flex;

@media (max-width:1100px){
  display: grid;
  grid-template-columns: repeat(9, 50px);
  grid-auto-rows: 50px;
  grid-gap: 2px;
}

@media (max-width: 550px){
    grid-template-columns: repeat(6, 50px);
}

`
const ContainerAll = styled.div`
margin: 5px 0px 5px 0px;
padding: 5px;
width: 100vw;
border-bottom: 2px solid var(--colorPrimario);
border-top: 2px solid var(--colorPrimario);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Titles = styled.h1`
font-size: 25px;
margin-top:20px;
text-transform: uppercase;
`
export default function Skills() {

    return (
        <ContainerAll>
            <Titles>Skills</Titles>
            <ContainerSkils className="containerSkills">
                <Imgs src={reactImg} alt='reactImg' />
                <Imgs src={viteImg} alt='viteImg' />
                <Imgs src={jsImg} alt='jsImg' />
                <Imgs src={cssImg} alt='cssImg' />
                <Imgs src={htmlImg} alt='htmlImg' />
                <Imgs src={sassImg} alt='sassImg' />
                <Imgs src={apiImg} alt='apiImg' />
                <Imgs src={auth0Img} alt='auth0Img' />
                <Imgs src={bootstrapImg} alt='bootstrapImg' />
                <Imgs src={firebaseImg} alt='firebaseImg' />
                <Imgs src={githubImg} alt='githubImg' />
                <Imgs src={nodeImg} alt='nodeImg' />
                <Imgs src={tailwindImg} alt='tailwindImg' />
                <Imgs src={vercelImg} alt='vercelImg' />
                <Imgs src={vscImg} alt='vscImg' />
                <Imgs src={figmaImg} alt='figmaImg' />
                <Imgs src={corelImg} alt='corelImg' />
                <Imgs src={canvaImg} alt='canvaImg' />
            </ContainerSkils>
        </ContainerAll>
    )
}
