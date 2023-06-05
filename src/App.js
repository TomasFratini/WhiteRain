



function App() {


  return (
    <div className = "app">
      <div className="search">
        <input></input>
      </div>
      <div className ="container">
        <div className="top">
          <div className="location">
            <p>Cordoba</p>
          </div>
          <div className="temp">
            <h1> 50°C</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        
        <div className="bottom">
          <div className ="feels">
            <p>45°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p> 30%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>80 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
