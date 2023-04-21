import { useState, useRef, useLayoutEffect } from "react"
import Buttons from "../../components/buttons/button"
import './index.css'


function Index(){
    const [display, setDisplay] = useState("")
    const [calculoDoResultado, setCalculoDoResultado] = useState("")

    const handleAddOperador = (op) => {
        if (display.indexOf(op) === -1){
            setDisplay(display + op)
        } else if(display.indexOf(op, display.length -1) === -1){
           setDisplay(display + op)
        } 
    } 

    const handleAddNumero = (num) => {
        setDisplay(display + num) 
    }

    const handleDeleteDisplay = () =>{
        setDisplay(display.substring(0, display.length - 1))
    }

    const handleClean = (clean) => {
        setDisplay(clean)
        setCalculoDoResultado(clean)
    }

   const containerRef = useRef()

   const historicoDeResultados = (resultado) => {
     
        containerRef.current.insertAdjacentHTML("afterbegin", `<span class="historico">${resultado}</span>`)
    }
    

    const handleResultado = (display) => {
        setCalculoDoResultado(display)
         
        const resultado = eval(display).toString()
        setDisplay(resultado)

        historicoDeResultados(display)

    }
   
    return (
    <div className="page">  
        <div className="layout-da-calculadora">
            <div className="visor" ref={containerRef} >
                 <span className="resultado-do-calculo">{calculoDoResultado}</span>
                 <input maxLength={17} placeholder="0" value={display} className="display-calculo" disabled/>
            </div>

            <div className="container-button">
                    {/* linha um */}
                    <div className="row1">
                        <Buttons label='<' onClick={() => handleDeleteDisplay('')} /> 
                        <Buttons label='C' onClick={() => handleClean('')} /> 
                        <Buttons label='.' onClick={() => handleAddOperador('.')} /> 
                        <Buttons label='x' onClick={() => handleAddOperador('*')} /> 
                    </div>
                    {/* linha dois */}
                    <div className="row2">
                        <Buttons label='7' onClick={() => handleAddNumero('7')} /> 
                        <Buttons label='8' onClick={() => handleAddNumero('8')} /> 
                        <Buttons label='9' onClick={() => handleAddNumero('9')} /> 
                        <Buttons label='/' onClick={() => handleAddOperador('/')} /> 
                    </div>
                    {/* linha três */}
                    <div className="row3">
                        <Buttons label='4' onClick={() => handleAddNumero('4')} /> 
                        <Buttons label='5' onClick={() => handleAddNumero('5')} /> 
                        <Buttons label='6' onClick={() => handleAddNumero('6')} /> 
                        <Buttons label='-' onClick={() => handleAddOperador('-')} /> 
                    </div>
                    {/* linha quatro */} 
                    <div className="row4">
                        <Buttons label='3' onClick={() => handleAddNumero('3')} /> 
                        <Buttons label='2' onClick={() => handleAddNumero('2')} /> 
                        <Buttons label='1' onClick={() => handleAddNumero('1')} /> 
                    </div>
                    {/* linha cinco */}
                    <div className="row5"> 
                        <Buttons label='0' onClick={() => handleAddNumero('0')} /> 
                        <Buttons label='=' onClick={() => handleResultado(display)} /> 
                    </div>
                    {/* linha horizontal */}
                    <div className="row6">
                        <Buttons label='+' onClick={() => handleAddOperador('+')} /> 
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Index