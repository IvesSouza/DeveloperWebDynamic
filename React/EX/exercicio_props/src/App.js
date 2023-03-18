import React from 'react'
import Descrpt from './componet/descriptionWidthLink';
import './componet/main_style.css'

function App() {
  return (
    <div class='main'>
      <Descrpt name='Mercurio' img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg'/>
      <Descrpt name='Venus' img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg'></Descrpt>
    </div>
  );
}

export default App;
