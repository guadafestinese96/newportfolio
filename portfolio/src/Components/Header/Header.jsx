import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import guadaImg from '../../assets/fotoCv.jpg';

const links = [
  {
    path: "/proyectos",
    label: "proyectos",
  },
  {
    path: "/estudios",
    label: "estudios",
  },
  {
    path: "/skills",
    label: "skills",
  },
];

const HeaderContainer = styled.div`
  background-color: var(--color-secundario);
  color: white;
  display: flex;
  heigth: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
`;

const GifContainer = styled.div`

width: 60px;
height: 60px;
  border-radius: 50%;
  padding: 10px;
  border: 5px solid var(--color-primario);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
  background-color: var(--color-primario);
  transition: 1s;
  }
`;

const Gif = styled.img`
  width: 60px;
  height:60px;  
  mask-image: linear-gradient(black 80%,transparent );
  border-radius: 50%
`;



const LiLinks = styled.li`
  color: black;
  background-color: var(--color-primario);
  margin: 5px;
  border: none;
  border-radius: 5px;
  padding: 8px;
  width: 82px;
  text-transform: capitalize;
  text-align: center;

  @media (max-width: 500px) {
    width: 55px;
    font-size: 10px;
  }

  &:hover {
    background-color: #000;
    color: var(--color-primario);
  }
`;
const UlHeader = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width:500px){
  flex-direction: column;
  }
`;


export default function Header() {

  return (
    <HeaderContainer>
      <NavLink to="/">
        <GifContainer>
          <Gif src={guadaImg} alt="worker" />
        </GifContainer>
      </NavLink>


      <UlHeader className="ulHeader">
        {links.map((link, index) => (
          <NavLink to={link.path} key={index}>
            <LiLinks className="liHeader" key={index}>
              {link.label}
            </LiLinks>
          </NavLink>
        ))}
      </UlHeader>
    </HeaderContainer>
  );
}
