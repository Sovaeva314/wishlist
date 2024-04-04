import { data } from "./data";
import { useState } from "react"; 
import './App.css';

function App() {
  
  const [gifts, setGifts] = useState(data);
  console.log(data);

  const removeItem = (id) => {
    console.log(id)
    let result = gifts.filter(gift => gift.id !== id);
    console.log(result);
    setGifts(result)
  }

  return(
    <div>
      <div className="container">
        <h1>List of {gifts.length} gifts</h1>
      </div>

    {gifts.map((element => {
      const {id, gift, image} = element;
      
      return(
        <div key={id}>
          <div className="container">
            <h2>{id} - {gift}</h2>
          </div>

          <div className="container">
            <img src={image} width="300px" alt="gift"/>
          </div>

          <div className="container">
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>

        </div>

      )
    }))}
    
    <div className="container">
          <button onClick={() => setGifts([])}>Delete all</button>
          </div>
  </div>
  )
}

export default App;
