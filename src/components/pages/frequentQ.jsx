import Nav from '../Nav';
import Footer from '../Footer';
import { useState } from 'react';
export const FrequentQ = () => {
    const [preguntasExpandidas, setPreguntasExpandidas] = useState([]);
    const togglePregunta = (indice) => {
        if (preguntasExpandidas.includes(indice)) {
            setPreguntasExpandidas(preguntasExpandidas.filter((i) => i !== indice));
        }else {
            setPreguntasExpandidas([...preguntasExpandidas, indice]);
    }
  };
    const preguntas = [
    {
      titulo: '¿los ancianos tienen prioridad?',
      respuesta: 'si',
    },
    {
      titulo: '¿cuanto demora una cita?',
      respuesta: '20 minutos',
    },
    // Agrega más preguntas y respuestas aquí
  ];
    return (
        <div>
            <Nav></Nav>
            <h1 className='title'>Preguntas Frecuentes</h1>
            {preguntas.map((pregunta, indice) => (
            <div key={indice}>
                <h3 onClick={() => togglePregunta(indice)}>{pregunta.titulo}</h3>
                {preguntasExpandidas.includes(indice) && <p>{pregunta.respuesta}</p>}
        </div>
      ))}
            <Footer></Footer>
        </div>
    );
}

export default FrequentQ;

