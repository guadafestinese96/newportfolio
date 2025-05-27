import "./Estudios.css";
import "./UnEstudio";
import UnEstudio from "./UnEstudio";

const carreraDesReact = {
  titulo: "Carrera de Desarrollo Frontend React",
  img: "carreraReact.png",
  descripcion:
    "En esta carrera aprendí a programar una tienda online comenzando por su maquetado en Figma y luego con HTML, CSS, Javascript y React JS complementando los tres cursos.",
    logoAcademia: "coderLogo.png"
};

const dw = {
  titulo: "Desarrollo Web",
  img: "desarrolloWeb.png",
  descripcion:
    "HTML5, CSS, Responsive Web Design, Bootstrap, Librerías, Node JS, SASS, Flexbox, Grid, Animaciones, SEO, Github.",
    logoAcademia: "coderLogo.png"
};

const js = {
  titulo: "Javascript",
  img: "javascript.png",
  descripcion:
    "Ciclos e iteraciones, Funciones, Objetos, Arrays, Funciones de orden superior, DOM, Eventos, Storage, JSON, Asincronía, Promesas, AJAX y Fetch, Frameworks.",
    logoAcademia: "coderLogo.png"
};

const react = {
  titulo: "React JS",
  img: "reactJs.png",
  descripcion:
    "JSX, Componentes, Promesas, Asincronía, MAP, APIS, Workshop, Hooks, Children, Patrones, Routing, Eventos, Context, Firebase.",
  logoAcademia: "coderLogo.png"
};
const python = {
  titulo: "Python",
  img: "python.png",
  descripcion:
    "Números y cadenas, Colección de datos, Operadores y expresiones, Controladores de flujo, Conjuntos y diccionarios, Methods de colecciones, Entrada y salida de datos, Funciones, POO, Herencias, Módulos y paquetes, Github, Django, Playground.",
    logoAcademia: "coderLogo.png"
};

export default function Estudios() {
  return (
    <div className="estudiosContainer">
      <h1 className="titles">Estudios</h1>

      <div className="contenedorUnEstudio">
        <UnEstudio
          titulo={carreraDesReact.titulo}
          img={carreraDesReact.img}
          descripcion={carreraDesReact.descripcion} logoAcademia = {carreraDesReact.logoAcademia}
        />

        <UnEstudio
          titulo={dw.titulo}
          img={dw.img}
          descripcion={dw.descripcion} logoAcademia = {dw.logoAcademia}
        />

        <UnEstudio
          titulo={js.titulo}
          img={js.img}
          descripcion={js.descripcion}
          logoAcademia = {js.logoAcademia}
        />

        <UnEstudio
          titulo={react.titulo}
          img={react.img}
          descripcion={react.descripcion}
          logoAcademia = {react.logoAcademia}
        />

        <UnEstudio
          titulo={python.titulo}
          img={python.img}
          descripcion={python.descripcion}
          logoAcademia = {python.logoAcademia}
        />
      </div>
    </div>
  );
}
