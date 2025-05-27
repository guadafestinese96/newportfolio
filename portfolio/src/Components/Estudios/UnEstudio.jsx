import './Estudios.css';

export default function UnEstudio({titulo, img, descripcion, logoAcademia}){
    return (
        <div className='diplomasContainer'>
            <div className="titleLogoContainer">
                <h2 className='diplomaTitles'>{titulo}</h2>
                <img src={logoAcademia} alt="logoAcademia" className='logoAcademia'/>
            </div>
            
            <img className='diplomasImg' src={img} alt='carreraReact'/>
            <p className='descripcionCursos'>{descripcion}</p>
        </div>
    )
}