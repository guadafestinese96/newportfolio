import coderLogo from '../../assets/coderLogo.png';
import styled from 'styled-components';
import desarrolloWeb from '../../assets/desarrolloWeb.png'
import javascript from '../../assets/javascript.png'
import reactJs from '../../assets/reactJs.png'
import python from '../../assets/python.png'
import carreraReact from '../../assets/carreraReact.png'
import './Estudios.css'

const LogoImg = styled.img`
width:90px;
margin-top:20px;
`
const Diplomas = styled.img`
width: 400px;
border-radius:5px;
background-color:antiquewhite;
padding: 5px;
@media(max-width:400px){
width: 300px;
}
`
const DiplomasCarrera = styled.img`
width: 650px;
border-radius:5px;
background-color:antiquewhite;
padding: 5px;

@media(max-width:400px){
width: 300px;
}
`
const DescripcionCursos = styled.p`
background-color:rgb(0,0,0,0.4);
color:antiquewhite;
width:500px;
padding: 5px;
margin: 5px;
text-align: justify;

@media(max-width:400px){
width:300px;
font-size:10px;
}
`
const DiplomasContainer = styled.div`
display: flex; 
justify-content:center;
align-items:center;
flex-direction:column;
margin: 15px;
border-bottom: 2px solid antiquewhite;
`
const DiplomaTitles = styled.h2`
margin: 5px;
@media(max-width:400px){
font-size:15px;
}
`
const Titles = styled.h1`
font-size: 25px;
margin-top:20px;
text-transform: uppercase;

@media (max-width: 400px){
font-size:15px;
}
`

export default function Estudios(){
    return(
        <div className="estudiosContainer">
            <Titles>Estudios</Titles>
            <LogoImg src={coderLogo} alt='coderLogo'/>

            <DiplomasContainer>
                <DiplomaTitles>Carrera de Desarrollo Frontend React</DiplomaTitles>
                <DiplomasCarrera src={carreraReact} alt='carreraReact'/>
                <DescripcionCursos>En esta carrera aprendí a programar una tienda online con React y Javascript, comenzando por su maquetado en Figma y luego con HTML y CSS, posteriormente le dimos vida a la página utilizando Javascript en el segundo curso, y finalmente mejoramos y simplificamos mucho código con React en el último curso</DescripcionCursos>
            </DiplomasContainer>

            <DiplomasContainer>
                <DiplomaTitles>Desarrollo Web</DiplomaTitles>
                <Diplomas src={desarrolloWeb} alt='desarrolloWeb'/>
                <DescripcionCursos>HTML5, CSS, Responsive Web Design, Bootstrap, Librerías, Node JS, SASS, Flexbox, Grid, Animaciones, SEO, Github</DescripcionCursos>
            </DiplomasContainer>

            <DiplomasContainer>
                <DiplomaTitles>Javascript</DiplomaTitles>
                <Diplomas src={javascript} alt='javascript'/>
                <DescripcionCursos>Ciclos e iteraciones, Funciones, Objetos, Arrays, Funciones de orden superior, DOM, Eventos, Storage, JSON, Asincronía, Promesas, AJAX y Fetch, Frameworks</DescripcionCursos>              
            </DiplomasContainer>

            <DiplomasContainer>
                <DiplomaTitles>React JS</DiplomaTitles>
                <Diplomas src={reactJs} alt='reactJs'/>
                <DescripcionCursos>JSX, Componentes, Promesas, Asincronía, MAP, APIS, Workshop, Hooks, Children, Patrones, Routing, Eventos, Context, Firebase</DescripcionCursos>                
            </DiplomasContainer>

            <DiplomasContainer>
                <DiplomaTitles>Python</DiplomaTitles>
                <Diplomas src={python} alt='python'/>
                <DescripcionCursos>Números y cadenas, Colección de datos, Operadores y expresiones, Controladores de flujo, Conjuntos y diccionarios, Methods de colecciones, Entrada y salida de datos, Funciones, POO, Herencias, Módulos y paquetes, Github, Django, Playground</DescripcionCursos>                
            </DiplomasContainer>
        </div>
    )
}