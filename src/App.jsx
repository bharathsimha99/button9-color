import { useState } from 'react';
import './App.css';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'azure']
  const [btnColors, setBtnColors] = useState(Array(colors.length).fill(null))

  const handleBtnClick = (index) => {
    if (btnColors[index] !== null) return

    const newBtnColors = [...btnColors]
    newBtnColors[index] = colors[index]
    setBtnColors(newBtnColors)

  }

  return (
    <div className="App">
      <h1>Color Buttons</h1>
      <div className='btn-container'>
        {
          colors.map((color, index) => (
            <button key={index}
             style={{backgroundColor:btnColors[index] || 'gray'}}
             onClick={()=>handleBtnClick(index)}
             disabled={btnColors[index] !== null}
            >{color}</button>
          ))
        }

      </div>


    </div>
  );
}

export default App;
