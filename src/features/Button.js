import { useState, useEffect } from "react";
import './Button.css';

function Button() {
  const [newCatImage, setNewCatImage] = useState([]);
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    const getData = async () => {
      await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${newCatImage}`
      )
        .then((res) => res.json())
        .then((data) => setNewCatImage(data))
        .catch((err) => setHasError(true));
    };
    getData();
  };



  return (
    <button onClick={handleClick} className= 'buttoncss'>
      UPLOAD
    </button>
  );
}

export default Button;
