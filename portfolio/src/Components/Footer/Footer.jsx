import linkedinImg from '../../assets/linkedin.png'
import wpImg from '../../assets/wp.png'
import emailImg from '../../assets/email.png'
import githubImg from '../../assets/githubImg.png'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import vercelImg from '../../assets/vercel.png';


const ContactContainer = styled.div`
background-color: var(--color-secundario);
width: 100%;
bottom: 0;
position: fixed;
display: flex;
justify-content: center;
align-items:center;
box-shadow: 20px 3px 20px var(--color-secundario);
`

const ContactImgs = styled.img`
width: 20px;
margin: 8px;
background-color: var(--color-primario);
padding:8px;
border-radius: 10px;
border: none;
filter: drop-shadow(3px 3px 5px #000);

&:hover{
background-color: #fff;
}
`

export default function Footer() {
    return (
        <ContactContainer>
     
            <NavLink to='https://www.linkedin.com/in/guadalupe-festinese-bb05b82a4/' target="_blank">
                <ContactImgs src={linkedinImg} alt='linkedinImg' />

            </NavLink>

            <NavLink to="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target='_blank'>
                <ContactImgs src={wpImg} alt='wpImg' />
            </NavLink>

            <NavLink to='mailto:festinese.guadalupe@gmail.com' target='_blank'>
                <ContactImgs src={emailImg} alt="emailImg" />
            </NavLink>

            <NavLink to='https://github.com/guadafestinese96' target='_blank'>
                <ContactImgs src={githubImg} alt="githubImg" />
            </NavLink>

            <NavLink to='https://vercel.com/guadalupes-projects-cb21e24d' target='_blank'>
                <ContactImgs src={vercelImg} alt="vercelImg" />
            </NavLink>



        </ContactContainer>
    )
}