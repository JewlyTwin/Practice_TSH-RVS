import React, {useState,useEffect} from 'react'

function ProgressBar(props) {
  const [scroll, setScroll] = useState(0);
  const lastPartScroll = props.currentPart; 
  console.log(lastPartScroll)

  useEffect(() => {

    let progressBarHandler = () => {    
        const totalScroll = document.documentElement.scrollTop+lastPartScroll;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log("currentPart "+props.currentPart)
        const scroll = `${(totalScroll / windowHeight) + (lastPartScroll-1) }`;
        console.log("scroll "+scroll)

        setScroll(scroll/props.part);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
});

  return (
    <div id="progressBarContainer">
        <div id="progressBar" style={{transform: `scale(${scroll}, 0.4)`}}/>
     </div>
  )
}

export default ProgressBar;