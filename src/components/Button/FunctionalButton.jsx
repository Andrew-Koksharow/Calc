import React , { useContext }  from 'react';
import val from './Button.module.css';
import {contextNumber} from '../Provider';


let FunctionalButton = ({value,cl}) => {
  const {setOperator} = useContext(contextNumber);
    return (
        <button className={cl =='equal' ? val.equal  :  val.button} onClick={()=> {setOperator(value)}}>
{value}
        </button>
    )
}

export default FunctionalButton;