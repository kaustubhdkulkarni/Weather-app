import { useRef } from "react";
import "./App.css";
const Api_key = "592b59438cfbe0b73ba92b61ba34e755";

function App() {
  const inputRef = useRef(null);

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`;
    console.log(inputRef.current.value)
    fetch(URL).then(res=> res.json())
    .then(data=>{
      console.log(data, "----data--")
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <>
      <input type="text" y ref={inputRef} />
      <button  onClick={fetchWeather}>click me </button>
    </>
  );
}

export default App;
