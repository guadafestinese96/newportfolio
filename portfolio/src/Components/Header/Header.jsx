import workerGif from "../../assets/worker2.gif";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import memojiImg from "../../assets/memoji.png";
import { useState } from "react";

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
  background-color: rgb(0, 0, 0, 0.5);
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
  border: 5px solid antiquewhite;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
  background-color: antiquewhite;
  transition: 1s;
  }
`;

const Gif = styled.img`

  width: 60px;
  height:60px;  
  mask-image: linear-gradient(black 80%,transparent );
  
`;



const LiLinks = styled.li`
  color: black;
  background-color: antiquewhite;
  margin: 5px;
  border: 3px solid white;
  border-radius: 5px;
  padding: 5px;
  width: 82px;
  text-transform: capitalize;
  text-align: center;

  @media (max-width: 400px) {
    width: 55px;
    font-size: 12px;
  }

  &:hover {
    background-color: black;
    color: antiquewhite;
  }
`;
const UlHeader = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SelectOptions = styled.select`
color: black;
  background-color: antiquewhite;
  margin: 5px;
  border: 3px solid white;
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  text-transform: uppercase;
  text-align: center;
  font-family: "Poppins";
  font-weight: bold;
`


export default function Header() {
  const [selectOption, setSelectOption] = useState("menu");
  console.log(selectOption);

  const navigate = useNavigate();

  const handleSelectChange = (e)=>{
    navigate(e.target.value)
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <GifContainer>
          <Gif src={memojiImg} alt="worker" />
        </GifContainer>
      </NavLink>

       
      <SelectOptions
        onChange={handleSelectChange}
      >
        <option value="#" >MENU</option>
        <option value="/proyectos">Proyectos</option>
        <option value="/estudios">Estudios</option>
        <option value="/skills">Skills</option>
      </SelectOptions>



      {/* <UlHeader className="ulHeader">
        {links.map((link, index) => (
          <NavLink to={link.path} key={index}>
            <LiLinks className="liHeader" key={index}>
              {link.label}
            </LiLinks>
          </NavLink>
        ))}
      </UlHeader> */}
    </HeaderContainer>
  );
}
