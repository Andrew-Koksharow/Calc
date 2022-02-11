import React, {useContext} from 'react';
import val from './Button.module.css';
import {contextNumber} from '../Provider';



let Button = ({value, cl}) => {

  const {setNumberDisplay} = useContext(contextNumber);
    return (
        <button className={val.button} onClick={()=>{setNumberDisplay(value)}}>
{value}
        </button>
    )
}

export default Button;