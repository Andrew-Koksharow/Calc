import React , { useContext }  from 'react';
import val from './Button.module.css';
import {contextNumber} from '../Provider';


let FunctionalButton = ({value}) => {
  const {setOperator} = useContext(contextNumber);
    return (
        <button className={val.button} onClick={()=> {setOperator(value)}}>
{value}
        </button>
    )
}

export default FunctionalButton;