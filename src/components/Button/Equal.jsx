import React , { useContext }  from 'react';
import val from './Button.module.css';
import {contextNumber} from '../Provider';


let Equal = () => {
  const {equalButton} = useContext(contextNumber);
    return (
        <button className={val.equal} onClick={()=> {equalButton()}}>
=
        </button>
    )
}

export default Equal;