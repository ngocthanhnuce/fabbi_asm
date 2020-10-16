import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import StepOne from '../src/components/step-1'
import StepTwo from '../src/components/step-2';
import StepThree from '../src/components/step-3';
import Review from '../src/components/review';
import './App.css';
import { Steps } from 'antd';
import {multiStepContext} from './StepContext';
const { Step } = Steps;


const App =() => {
  const {current} = useContext(multiStepContext);
  
  const showStep = (current) => {
    switch(current){
      case 0: 
        return <StepOne />
      case 1:
        return <StepTwo />
      case 2:
        return <StepThree />
      case 3:
        return <Review />
      default:
    }
  }
  
  return (
    <div className="App">
      <h2>Fabbi Asm</h2>
      <div className='content-stepper'>
      
        <Steps
          type="navigation"
          current={current}
          className="site-navigation-steps"
          initial={0}
          style={{width:600, marginLeft:400}}
        >
          <Step status={current-1} title="StepOne" />
          <Step status={current-2} title="StepTwo" />
          <Step status={current-3} title="StepThree" />
          <Step status={current-4} title="Review" />
        </Steps>
        
      </div>
      {showStep(current)}
      
    </div>
  );
}

export default App;
