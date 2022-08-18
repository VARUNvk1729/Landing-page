import React from 'react'
import './Slider.css'
import {useInView} from "react-intersection-observer"
const Slider = ( { imageSrc,title,subtitle,flipped } ) => {
   
        const { ref, inView} = useInView({
          /* Optional options */
          threshold: 0,
        });


    const renderContent = () =>{
      if(!flipped)
      {
         return (
         <>
         <img src={imageSrc} alt="bmw" className="sliderimage" />
         <div className="slidercontent">
             <h1 className="slidertitle">{title}</h1>
             <p>{subtitle}</p>
         </div>
         </>
         );
      }
      else
      {
          return( <>
        <div className="slidercontent">
        <h1 className="slidertitle">{title}</h1>
        <p>{subtitle}</p>
         </div>
        <img src={imageSrc} alt="tiger" className="sliderimage" />
          </>
          );
      }
  };
  return <div className={inView ? "slider slider--zoom" : "slider"} ref={ref} >{renderContent()}</div> //onscroll animation

};

export default Slider