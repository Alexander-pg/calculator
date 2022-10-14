import './App.css';
import Boton from './componentes/boton.jsx'
import stylesboton from './componentes-style/boton-style.css'
import Pantalla from './componentes/pantalla.jsx';
import stylespantalla from './componentes-style/pantalla-style.css'
import BotonClear from './componentes/botonClear.jsx'
import stylesclear from './componentes-style/clear-style.css'
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {


  const [currentInput,setCurrentInput] = useState('')

  const agregarInput = (valor) =>{
    setCurrentInput(currentInput + valor)
  }

  const calcularResultado = ()=>{
    setCurrentInput(evaluate(currentInput))
    if(currentInput == ''){
      setCurrentInput('')
      alert("Ingresa un valor a operar")
    }
  }

  return (
    <div className="App">
  
   <div className='contenedor-calculadora'>
    
    <Pantalla 
    input={currentInput}
    />

    <div className='fila'>
     <Boton manejarClic={agregarInput}>1</Boton>
     <Boton manejarClic={agregarInput}>2</Boton>
     <Boton manejarClic={agregarInput}>3</Boton>
     <Boton manejarClic={agregarInput}>+</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>4</Boton>
    <Boton manejarClic={agregarInput}>5</Boton>
    <Boton manejarClic={agregarInput}>6</Boton>
    <Boton manejarClic={agregarInput}>-</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>7</Boton>
    <Boton manejarClic={agregarInput}>8</Boton>
    <Boton manejarClic={agregarInput}>9</Boton>
    <Boton manejarClic={agregarInput}>*</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={calcularResultado}>=</Boton> 
    <Boton manejarClic={agregarInput}>0</Boton> 
    <Boton manejarClic={agregarInput}>.</Boton>
    <Boton manejarClic={agregarInput}>/</Boton>
    </div>
    <div className='fila'>
      <BotonClear manejarClear={()=>setCurrentInput('')}>Clear</BotonClear>
    </div>
   </div>
    </div>
  );
}

export default App;
