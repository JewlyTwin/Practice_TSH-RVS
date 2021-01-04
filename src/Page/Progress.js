import React, { Component,useState,useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ProgressBar from '../Component/Progress';


function Progress() {
  const [scrollPostion,setScrollPostion] = useState();

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

  // const listenToScrollEvent = () => {
  //   document.addEventListener("scroll", () => {
  //     requestAnimationFrame(() => {
  //       // Calculates the scroll distance
  //       this.calculateScrollDistance();
  //     });
  //   });
  // };

  // const calculateScrollDistance = () => {
  //   const scrollTop = window.pageYOffset; // how much the user has scrolled by
  //   const winHeight = window.innerHeight;
  //   const docHeight = this.getDocHeight();

  //   const totalDocScrollLength = docHeight - winHeight;
  //   const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

  //   this.setState({
  //     scrollPostion,
  //   });
  // }

  // const getDocHeight = () => {
  //   return Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   );
  // }

  
  // useEffect(() => {
  //   listenToScrollEvent();
  // }, [])


  return (
    <div>
      {/* <Progress/> */}
      <br/>
      <StyledButton>เริ่มทำแบบประเมิน</StyledButton>
    </div>
  )
}



export default Progress;