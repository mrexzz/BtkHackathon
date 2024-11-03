import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    
    <TypeAnimation
      sequence={[
        'Eğitimde Tekonolojik İnovasyon',
        1000, 
        'Eğitimdeki veriminizi arttırın!',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={0}
    />
  );
};
export default Animation;