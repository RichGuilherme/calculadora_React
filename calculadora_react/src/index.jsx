import { useState, useRef } from "react"
import Buttons from "./components/buttons"
import iconExcluir from './assets/icons-limpar-símbolo.png'
import './index.css'


function Index(){
    const [display, setDisplay] = useState("")
    const [toggle, setToggle] = useState(false)

    const containerRef = useRef()

    const handleAddOperador = (op) => {
        if (display.indexOf(op) === -1){ // impedir de criar dois op do mesmo tipo juntos.
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

    const elementoPai = document.querySelector(".historico-de-resultado")
    const elementosFilhosCriados = document.querySelectorAll(".calculos")
    
    const historicoDeResultados = (resultado) => {
         containerRef.current.insertAdjacentHTML("beforeend", `<span class="calculos">${resultado}</span>`)
 
         elementoPai.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}) //add o scroll automático no historico.
     }

    const handleClean = (clean) => {
        setDisplay(clean)
        
        elementosFilhosCriados.forEach((elemento) => { //Excluir todos elemento criados do historico.
            elemento.remove()
        })  
    }


    const handleResultado = (display) => {
        const resultado = eval(display).toString()
        setDisplay(resultado)
        
        historicoDeResultados(display)
    }
   
    // toggle-mode
        const html = document.querySelector('html')

        const checkbox = (offOn) => {
             if(offOn === false){
                addEventListener('change', () => {
                    html.classList.toggle('dark-mode')
                    setToggle(true)
                })
             }else {
                addEventListener('change', () => {
                    html.classList.toggle(false)
                })
             }
        }

    return (
    <div className="page">  
        <div className="layout-da-calculadora">
            
            <div className="toggle-mode">
                <input type="checkbox" id="foo" className="switch" onClick={() => checkbox(toggle)}/>
                <label htmlFor="foo"></label>
            </div>

            <div className="visor">
                <div className="historico-de-resultado" ref={containerRef}>

                </div>
                 <input maxLength={17} placeholder="0" value={display} className="display-calculo" disabled/>
            </div>

            <div className="container-button">
                    {/* linha um */}
                    <div className="row1">
                        <Buttons label = {<img src={iconExcluir} alt="iconExcluir"></img>} onClick={() => handleDeleteDisplay('')}></Buttons>
                        <Buttons label = 'C' onClick={() => handleClean('')} /> 
                        <Buttons label = '.' onClick={() => handleAddOperador('.')} /> 
                        <Buttons label = 'x' onClick={() => handleAddOperador('*')} /> 
                    </div>
                    {/* linha dois */}
                    <div className="row2">
                        <Buttons label = '7' onClick={() => handleAddNumero('7')} /> 
                        <Buttons label = '8' onClick={() => handleAddNumero('8')} /> 
                        <Buttons label = '9' onClick={() => handleAddNumero('9')} /> 
                        <Buttons label = '/' onClick={() => handleAddOperador('/')} /> 
                    </div>
                    {/* linha três */}
                    <div className="row3">
                        <Buttons label = '4' onClick={() => handleAddNumero('4')} /> 
                        <Buttons label = '5' onClick={() => handleAddNumero('5')} /> 
                        <Buttons label = '6' onClick={() => handleAddNumero('6')} /> 
                        <Buttons label = '-' onClick={() => handleAddOperador('-')} /> 
                    </div>
                    {/* linha quatro */} 
                    <div className="row4">
                        <Buttons label = '3' onClick={() => handleAddNumero('3')} /> 
                        <Buttons label = '2' onClick={() => handleAddNumero('2')} /> 
                        <Buttons label = '1' onClick={() => handleAddNumero('1')} /> 
                    </div>
                    {/* linha cinco */}
                    <div className="row5"> 
                        <Buttons label = '0' onClick={() => handleAddNumero('0')} /> 
                        <Buttons label = '=' onClick={() => handleResultado(display)} /> 
                    </div>
                    {/*coluna horizontal */}
                    <div className="row6">
                        <Buttons label = '+' onClick={() => handleAddOperador('+')} /> 
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Index