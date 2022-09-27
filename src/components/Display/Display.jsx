import React, { useContext, useEffect } from "react";
import { contextNumber } from '../Provider';
import val from './Display.module.css'


const Display = () => {

    const { number, memoryNumber, operator, setNumberDisplay,
         whyOperator, setOperator, setNumber } = useContext(contextNumber);

    

    useEffect(() => {
        const onKeypress = e => {
            console.log(e, e.keyCode)
            switch(e.keyCode) {
                case 27: setOperator('C');
                break;
                case 109: setOperator('-')
                break;
                case 173: setOperator('-')
                break;
                case 13: setOperator('=')
                break;
            }
         
        
        };
      
        document.addEventListener('keydown', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
      }, []);


 let setNum = (e) => {
setNumber(e);
}

      
    return (

        <>
            <input value={number} onChange={event => setNum(event.target.value)} autoFocus></input>
            <h2 className={val.input}>
                {memoryNumber} {operator === 'C' || operator === '<-' ? '' : operator}  {number}
            </h2>
            {/* <input type="hidden" value={number.length === 0 && memoryNumber.length === 0 ? 'Enter value' : number || memoryNumber}></input> */}


        </>
    )
}

export default Display