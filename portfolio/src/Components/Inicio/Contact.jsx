import linkedinImg from '../../assets/linkedin.png'
import wpImg from '../../assets/wp.png'
import emailImg from '../../assets/email.png'
import githubImg from '../../assets/githubImg.png'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyImg from '../../assets/copy.png';
import Swal from 'sweetalert2';

const ContactImgs = styled.img`
width: 30px;
margin: 10px;
background-color: antiquewhite;
padding: 5px;
border-radius: 5px;
border: 1px solid black;
&:hover{
background-color: black;
}
`
const ImgCopy = styled.img`
width: 20px;
filter:drop-shadow(1px 1px 1px rgb(0,0,0,0.5));
margin-left: 5px;
&:hover{
cursor:pointer;
}
`
const MailDiv = styled.div`
display:flex;
background-color: antiquewhite;
padding: 5px;
border-radius:5px;
font-size:15px;
justify-content:center;
align-items:center;

`
export default function Contact() {
    return (
        <div className="contact">
            <MailDiv>
                <p>festinese.guadalupe@gmail.com</p>
                <CopyToClipboard text="festinese.guadalupe@gmail.com">
                    <ImgCopy src={copyImg} alt='copyImg' onClick={()=>{
                        Swal.fire({
                            text: "Copiado",
                            width: 300,
                        });
                    }}/>
                </CopyToClipboard>
            </MailDiv>

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



        </div>
    )
}