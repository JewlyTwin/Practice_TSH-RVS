import React, { Component,useState,useEffect,useRef } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ProgressBar from '../Component/ProgressBar';


function Progress() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPart,setcurrentPart] = useState(1);
  let part = 3;
  let resultsRef = useRef();

  const StyledButton = withStyles({
    root: {
      background: 'hsl(185,80%,30%)',
      border: 0,
      borderRadius: 15,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '&:hover': {
        background: 'hsl(185,80%,20%)'
     },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const increaseCurrentPart = () => {
    setcurrentPart(currentPart+1)
    setIsLoading(false)
  };

  const decreaseCurrentPart = () => {
    setcurrentPart(currentPart-1)
    setIsLoading(false)
  };

  useEffect(
    () => {
      if (resultsRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: resultsRef.current.offsetTop
        });
        setIsLoading(true)
      }
    },
    [isLoading]
  );

  return (
    <div ref={resultsRef}>
      <ProgressBar part={part} currentPart={currentPart} />
      <br/>
      <div>
        <p>
          {currentPart==1?"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          :"Hi Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      </div>
      <StyledButton onClick={()=>increaseCurrentPart()}>เริ่มทำแบบประเมิน</StyledButton>
      <StyledButton onClick={()=>decreaseCurrentPart()}>ยกเลิกทำแบบประเมิน</StyledButton>
    </div>
  )
}



export default Progress;