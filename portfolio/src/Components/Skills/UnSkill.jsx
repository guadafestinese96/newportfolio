import styled from "styled-components";

const ContainerUnSkill = styled.div`
background-color:var(--color-primario);
margin: 10px;
border-radius: 10px;
`

const DivSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 15px;
  @media (max-width: 620px) {
     font-size: 10px;
   }
`;
const Imgs = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 3px;
  border-radius: 5px;

  @media (max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`;



export default function UnSkill({nombre, img}){
    return(
        <ContainerUnSkill>
        <DivSkill>
          <Imgs src={img} alt="skillImg" />
          <p>{nombre}</p>
        </DivSkill>
        </ContainerUnSkill>
    )
}
