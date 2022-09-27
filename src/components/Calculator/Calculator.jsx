import React from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import FunctionalButton from '../Button/FunctionalButton';
import val from './Calculator.module.css';
import Equal from '../Button/Equal';

export const Context = React.createContext();


const Calculator = () => {



    return (
        <div className={val.calculator}>
            <header className={val.h}>Calculator</header>
            <div className='display'><Display /></div>
            
            <div className={val.buttons}>
                <FunctionalButton value={`C`} />
                <FunctionalButton value={`<-`} />
              <div className={val.multiply}><FunctionalButton value={`*`} /></div>
                <Button value={7} />
                <Button value={8} />
                <Button value={9} />
                <FunctionalButton value={`+`} />
                <Button value={4} />
                <Button value={5} />
                <Button value={6} />
                <FunctionalButton value={`-`} />
                <Button value={1} />
                <Button value={2} />
                <Button value={3} />
                <FunctionalButton value={`/`} />
                <Button value={0} />
                <Button value={'.'} />
                <div className={val.equal}><Equal /></div>
            </div>

        </div>
    )

}

export default Calculator;