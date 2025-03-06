import linkedinImg from '../../assets/linkedin.png'
import wpImg from '../../assets/wp.png'
import emailImg from '../../assets/email.png'
import githubImg from '../../assets/githubImg.png'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const ContactContainer = styled.div`
background-color: rgba(0,0,0,0.5);
width: 100%;
bottom: 0;
position: fixed;
display: flex;
justify-content: center;
align-items:center;
box-shadow: 20px 3px 20px rgba(0, 0, 0, 0.4);
`

const ContactImgs = styled.img`
width: 20px;
margin: 10px;
background-color: antiquewhite;
padding: 5px;
border-radius: 10px;
border: 1px solid white;
filter: drop-shadow(3px 3px 5px black);

&:hover{
background-color: rgba(0,0,0,0.5);
}
`

export default function Contact() {
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



        </ContactContainer>
    )
}