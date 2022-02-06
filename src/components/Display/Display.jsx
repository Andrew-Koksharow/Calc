import React , {useContext} from "react";
import {contextNumber} from '../Provider';
import val from './Display.module.css'


const Display = (props) => {

const {number,memoryNumber} = useContext(contextNumber);
 

    return (
        <><h2 className={val.input}>
            {number.length === 0 && memoryNumber.length === 0 ? 'Enter value' : number || memoryNumber}
        </h2><p>
            `${number} ${memoryNumber}`
            </p></> 
    )
}

export default Display