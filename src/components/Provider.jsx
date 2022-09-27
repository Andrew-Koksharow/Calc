
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
        if (type === 'C') {
            setNumber('');
            setMemoryNumber('');
        }

        //
       
        //

    };
    const equalButton = () => {
        if (number && memoryNumber) {
            switch (operator) {
                case ('+'): setNumber(parseFloat(memoryNumber) + parseFloat(number))
                    break;
                case ('-'): setNumber(parseFloat(memoryNumber) - parseFloat(number));
                break;
                case('*'): setNumber(parseFloat(memoryNumber) * parseFloat(number));
                break;
                case('/'): setNumber(parseFloat(memoryNumber) / parseFloat(number));
                break;
            }
            setMemoryNumber('');
            whyOperator('');
        }
    }

    // const backupButton = (type) => {
    //     if (type === '<-') {
    //         if (number && !memoryNumber) {
    //             number.replace(/$\d/,'');
    //         }


    //     }
    // }




    return (
        <contextNumber.Provider
            value={{
                number, setNumber, setNumberDisplay, setFirstNumber,
                setOperator, memoryNumber, equalButton, operator, whyOperator
            }}
        >
            {props.children}
        </contextNumber.Provider>

    );

}

export default Provider;