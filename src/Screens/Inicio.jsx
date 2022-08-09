import {useState,useEffect} from 'react'
import Ruleta from './Ruleta'

let participantes = []
const Inicio = () => {

    const [Participantes_, setParticipantes_] = useState([])
    const [Init, setInit] = useState(false)
    
  return (
    <div>
        <h1 id='title' onClick={()=>{
            setInit(false)
        }}>Ruleta</h1>
        {
            !Init &&   <div id='init'>
                <div style={{margin:'0em 0em 2em 0em'}}><h2 id='subtitle'>Nombre de los participantes</h2></div>
            
            <div id='div_participantes'>
                <input id='participante' type='text' placeholder='Participante 1'></input>
                <br></br>
                <div id='rows'>
                <button  className='buttons' onClick={()=>{
                    if(document.getElementById('participante').value!='')
                    {
                    participantes.push(document.getElementById('participante').value)
                    setParticipantes_([...Participantes_,document.getElementById('participante').value])
                    document.getElementById('participante').value = ''
                    }
                    
                }}>añadir</button>
                {
                    participantes.length>0 && <button className='buttons' onClick={()=> setInit(true)}>comenzar</button>
                }
                
                {
                    participantes.length>0 && <button className='buttons' onClick={()=>{
                        setParticipantes_([])
                        participantes = []
                    }}>limpiar</button>
                }
                
               
                </div>
            </div>
                {
                    Participantes_.map((item,index)=>{
                        return <p className='normal_black' key={index}>{item}</p>
                    })
                }
            </div>
        }
      

            {
                Init && <Ruleta participantes={participantes}></Ruleta>
            }
        
    </div>
  )
}

export default Inicio