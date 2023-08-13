import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrent] = useState(0);

    const sliderStyles = {
        height:'100%',
        width:'100%',
        position:'relative'
    }

    const slideStyles = {
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentIndex].url})`
    

    }

const left = { position: "absolute",
top: "50%",
transform: "translate(0, -50%)",
left: "32px",
fontSize: "45px", color: "red",
zIndex: 1,
cursor: "pointer",
}; 
const right ={
position: "absolute",
 top: "50%",
transform: "translate(0, -50%)",
right: "32px",
fontSize: "45px",
color: "red",
zIndex: 1,
cursor: "pointer",
};

const goToPrevious = () =>{
    const isNotFirst = currentIndex != 0;
    const newIndex = isNotFirst?currentIndex-1: currentIndex;
    setCurrent(newIndex)
}

const goToNext = () =>{
    const isNotLast = currentIndex < slides.length-1;
    const newIndex = isNotLast?currentIndex+1: currentIndex;
    setCurrent(newIndex)
}


    return (<>
        <div style={sliderStyles}>
            <div style={left} onClick={goToPrevious}>❮</div>
            <div style={right} onClick={goToNext}>❯</div>
        <div style={slideStyles}></div>
        </div>
    </>
        );
}

export default ImageSlider
