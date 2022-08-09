import { useEffect } from 'react'
import {useState} from 'react'
import imgRuleta from '../assets/ruleta.png'
const Ruleta = ({participantes}) => {
    
    const preguntas = ['pregunta1','pregunta2','pregunta3','pregunta4','pregunta5','pregunta6','pregunta7','pregunta8','pregunta9','pregunta10']
    const [Participante, setParticipante] = useState('')
    const [Pregunta, setPregunta] = useState('')
    const [Girar, setGirar] = useState(false)
    function aleatorio(a,b) {
        return Math.round(Math.random()*(b-a)+parseInt(a));
        }
    useEffect(() => {
        document.getElementById('img_ruleta').classList.add('div_ruleta_active')
       setTimeout(() => {
        document.getElementById('img_ruleta').classList.remove('div_ruleta_active')
        let num_part = aleatorio(0,participantes.length-1)
        let num_preg = aleatorio(0,participantes.length-1)
        console.log(num_part,num_preg)

        setParticipante(participantes[num_part])
        setPregunta(preguntas[num_preg])
       }, 3000);
       
    }, [Girar])
  return (
    <div id='centrado'>
        <div id='div_ruleta' >
            
        <div id='div_participante'>
            <h2 id='subtitle_part'>{Participante}</h2>
            <h3 id='subtitle_preg'>{Pregunta}</h3>
        </div>
        <img  id='img_ruleta' src={imgRuleta} onClick={()=>{
            setParticipante('')
            setPregunta('')
           
        setGirar(!Girar)
       }}></img>
        </div>
      
    </div>
  )
}


export default Ruleta