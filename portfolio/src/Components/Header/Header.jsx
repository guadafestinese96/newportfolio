import workerGif from '../../assets/worker2.gif';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import memojiImg from '../../assets/memoji.png';

const links = [
    {
        path: "/proyectos",
        label: "proyectos"
    }, {
        path: "/skills",
        label: "skills"
    }
]

const Gif = styled.img`
width: 90px;
border-radius: 20px;
border:3px solid white;
background-color:antiquewhite;
padding: 2px;

@media (max-width: 400px){
    width: 50px;
    border-radius: 10px;
}
`
const HeaderContainer = styled.div`
background-color: rgb(0,0,0,0.5);
color: white;
display:flex;
justify-content: space-between;
align-items:center;
padding:10px;
`
const LiLinks = styled.li`
color:black;
background-color: antiquewhite;
margin: 5px;
border: 3px solid white;
border-radius: 5px;
padding: 5px;
width: 82px;
text-transform:capitalize;
text-align:center;

@media(max-width: 400px){
    width: 50px;
    font-size: 12px;
}

&:hover{
background-color:black;
color: antiquewhite;
}
`
const UlHeader = styled.ul`
display:flex;
justify-content:center;
align-items:center;
`

export default function Header() {
    return (
        <HeaderContainer>
            <NavLink to='/'>
                <Gif src={memojiImg} alt='worker' />
            </NavLink>
            <UlHeader className='ulHeader'>
                {links.map((link, index) => (
                    <NavLink to={link.path} key={index}>
                        <LiLinks className='liHeader' key={index}>{link.label}</LiLinks>
                    </NavLink>
                ))}
            </UlHeader>
        </HeaderContainer>
    )
}
