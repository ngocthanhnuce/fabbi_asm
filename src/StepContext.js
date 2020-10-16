import React, { useState } from 'react';
import App from './App';

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [current , setStep] = useState(0);
    const [data , setData] = useState([]);
    const [finalData , setFinalData] = useState([])

    function submitData (){
        setFinalData(finalData=>[...finalData, data]);
        setData('');
        setStep(0)
    }
    return(
        <div>
            <multiStepContext.Provider value={{current, setStep, data, setData, finalData, setFinalData, submitData}} >
                <App />
            </multiStepContext.Provider>
        </div>
    )

}

export default StepContext