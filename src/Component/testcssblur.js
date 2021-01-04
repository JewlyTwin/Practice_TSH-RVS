import React, { useState, useEffect  } from 'react';
import './blur.css'
import Paper from '@material-ui/core/Paper';
import Image from '../image/poster.png';

function Example() {
  const [image, setImage] = useState(null);

  useEffect(()=>{
    fetch("https://picsum.photos/200/300")
      .then((res) => {
        setImage(res.url) 
      })
  }, [])

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      display: 'flex',
      flexWrap: 'wrap',
      height: '100%',
      width: '100%',
      color: '#FF00FF'
  }
  };

  return (
    <Paper style={styles.paperContainer}>
      Some text to fill the Paper Component
    </Paper>
    // <div>
    //     <div className="container">
    //       <img 
    //       src={image}
    //       />
    //       <div>
    //         <h1> ARRRRRRRRRRR </h1>
    //       </div>
    //     </div> 
    // </div>

  );
}

export default Example