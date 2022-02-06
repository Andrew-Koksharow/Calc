import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';


export const contextNumber = React.createContext();


const Provider = (props) => {

    const [number, setNumber] = useState('');
    const [memoryNumber, setMemoryNumber] = useState('');
    const [operator, whyOperator] = useState('');

    const setNumberDisplay = num => {

        setNumber(`${(number + num).replace(/^0+/, '')}`);
    }

    const setFirstNumber = () => {
        setMemoryNumber(number);
        setNumber('');
    }

    const setOperator = (type) => {
        if (number) {
            whyOperator(type);
            setFirstNumber();

        }
        if (memoryNumber) {
            setFirstNumber();
        }
    };
        const equalButton = () => {
            if (number && memoryNumber) {
switch (operator) {
    case('+'): setNumber(parseInt(number)+parseInt(memoryNumber))
}
            }
        }
  




    return (
        <contextNumber.Provider
            value={{ number, setNumber, setNumberDisplay, setFirstNumber, setOperator, memoryNumber, equalButton }}
        >
            {props.children}
        </contextNumber.Provider>

    );

}

export default Provider;