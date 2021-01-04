import React, { Suspense,useState,useEffect } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { ColorExtractor } from 'react-color-extractor';


const ColorExtract = (props) => {
  const [image,setImage] = useState(props.image);
  const [buttoncolor,setButtoncolor] = useState("#aaffaa");
  
  const getColors = (colors) => {
    hexToHSL(colors[0]);
  };

  const hexToHSL = (H) => {
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b)
    let cmax = Math.max(r, g, b)
    let delta = cmax - cmin
    let h = 0
    let s = 0
    let l = 0

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    props.color("hsl(" + h + "," +80 + "%," + 30 + "%)")
    setButtoncolor("hsl(" + h + "," +80 + "%," + 30 + "%)")
  };

return(
  <div>
  {{buttoncolor} === "null" ? <div>Yo</div> : 
    <div>
      <div>
        <ColorExtractor getColors={getColors}>
          <img src={image} style={{ width: 300, height: 500 }} />
        </ColorExtractor>
        <div>
        {buttoncolor}
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
        </div>
      </div>
    </div>
  }
  </div>
  )
}

function OtherComponent() {
  return (
    <Trans i18nKey="begin_survey">
      Welcome to react using react-i18next
    </Trans>
  );
}

function MyComponent() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('th')}>th</button>
      <div className="App-intro">
        <OtherComponent />
      </div>
    </div>
  );

}

function Button(props) {
  const [color,setColor] = useState(props.color);
  return (
    <button
      style={{
        backgroundColor: {color},
        color: {color},
      }}
    >
      {console.log(color)}
      {color}ส่งแบบประเมิน
    </button>
  )
}

function App() {
  const [color, setColor] = useState(0)
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(null);

  useEffect(()=>{
    fetch("https://picsum.photos/200/300")
      .then((res) => {
        setImage(res.url) 
      })
  }, [])

  return (
    <Suspense fallback="loading">
      {image == null ? <div> cant load </div> : 
        <div>
          <MyComponent />
          <ColorExtract image={image} color={color => setColor({color})}/>
          {console.log(color)}
          {/* {color == 0 ? <div> cant load color </div> :
          <Button color={color}/>
          } */}
        </div>
      }
    </Suspense>
  );
}

export default App
