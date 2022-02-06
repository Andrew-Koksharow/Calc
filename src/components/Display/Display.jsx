import React , {useContext} from "react";
import {contextNumber} from '../Provider';
import val from './Display.module.css'


const Display = () => {

const {number,memoryNumber,operator} = useContext(contextNumber);
 

    return (
        <><h2 className={val.input}>
            {number.length === 0 && memoryNumber.length === 0 ? 'Enter value' : number || memoryNumber}
        </h2><p>
             {memoryNumber} {operator === 'C' || operator === '<-' ? '' : operator}  {number}
            </p></> 
    )
}

export default Display