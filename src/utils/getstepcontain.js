import PersonalInfomation from '../Components/Forms/Personal_Infomation'
import FamiliyInformation from '../Components/Forms/Familiy_Information'
import ContactInformation from '../Components/Forms/Contact_Information';
import OtherInformation from '../Components/Forms/Other_Information';
import Photos from '../Components/Forms/Photos';
const getStepContent = (activestep, setActivesetp) => {
  switch (activestep) {
    case 0:
      return (
        <>
          <PersonalInfomation
            activeStep={activestep}
            setActivesetp={setActivesetp}
          />
        </>
      );
    case 1:
      return (
        <>
          <FamiliyInformation
            activeStep={activestep}
            setActivesetp={setActivesetp}
          />
        </>
      );
    case 2:
      return (
        <>
          <ContactInformation
            activeStep={activestep}
            setActivesetp={setActivesetp}
          />
        </>
      );
    case 3:
      return (
        <>
          <OtherInformation
            activeStep={activestep}
            setActivesetp={setActivesetp}
          />
        </>
      );
    case 4:
      return (
        <>
          <Photos
            activeStep={activestep}
            setActivesetp={setActivesetp}
          />
        </>
      );

    default:
      <>unknown step</>;
  }
};

export default getStepContent