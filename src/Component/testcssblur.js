import React, { useState, useEffect  } from 'react';
import './blur.css'
import Paper from '@material-ui/core/Paper';
import Image from '../image/image15.png';

function Example() {
  const [image, setImage] = useState(null);

  useEffect(()=>{
    fetch("https://picsum.photos/200/300")
      .then((res) => {
        setImage(res.url) 
      })
  }, [])

  const styles = {
    Body: {
      height: '100%',
      overflow: 'hidden',
      // zIndex: '2',
      backgroundColor: 'transparent'
    },
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'absolute',
      top: 0,
      left: 0,
      flexWrap: 'wrap',
      height: '100%',
      width: '100%',
      filter: 'blur(25px)',
      position: 'absolute',
      zIndex: '-1',
      overflow: 'hidden',
    },
    darkContainer: {
      position: 'absolute',
      background: 'linear-gradient(to bottom, rgba(107, 107, 107, 0.5), rgba(0, 0, 0, 0.5))',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: '0',
    }
  };

  return (
    <div style={styles.Body}>
      <div style={styles.paperContainer}/>
      <div style={styles.darkContainer}>
        asdasdasd
      </div>
    </div>
  );
}

export default Example