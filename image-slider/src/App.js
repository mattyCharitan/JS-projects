
import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
  const slides = [
    {
      url:'img/1.png'
    },
    {
      url:'img/2.png'
    },
    {
      url:'img/3.png'
    },
    {
      url:'/img/4.png'
    },
    {
      url:'img/5.png'
    },
    {
      url:'img/6.jpg'
    }
  ];
  const boxStyles = {
    paddingTop:'25px',
    width:'500px',
    height:'500px',
    margin: "0 auto"

  };
  return <div>
    <div style={boxStyles}>
    <ImageSlider slides={slides}/>
    </div>
    
  </div>
 
}

export default App;
