import { StepLabel, Step, Stepper } from "@mui/material/";


import { useState } from "react";
import '../../css/style.css'
import getStepContent from "../../utils/getstepcontain";



export default function CreateProfile(props) {
  const {darkMode} = props;
  console.log(darkMode)
  const [activestep, setActivesetp] = useState(2);

  const steps = [
    "PERSONAL INFORMATION",
    "FAMILY INFORMATION",
    "CONTACT INFORMATION",
    "OTHER INFORMATION",
    "PHOTOS",
  ];



    
  return (
    <>
      <div className="container">
        <div className="stepper">
          <Stepper activeStep={activestep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      <div className="stepper_body">{getStepContent(activestep,setActivesetp)}</div>
    </>
  );
}
