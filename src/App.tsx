import { useEffect } from "react";
import "./styles.css";

const fetchImage = () =>
{
  return fetch("https://pixabay.com/api/?key=29881204-056d9bfecd2a6e01ecc5be958&per_page=24&image_type=photo")
  .then((response) =>  response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
}

export default function App() {
  useEffect(() => 
  {
    fetchImage()
  },[]);
    return (
    <div className="App">
      <h2>Image search</h2>
      <div className="Search-Bar">
        <input name="query" />
        <button className="Search-Bar-Submit">Search</button>
      </div>
      <div className="Images"></div>
    </div>
  );
}
