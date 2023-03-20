import { useState, useEffect } from "react";
import './Cat.css';


const Cat = ({ getNewCat }) => {
  const [catImage, setCatImage] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getData() {
      await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${4}`
      )
        .then((res) => res.json())
        .then((data) => setCatImage(data))
        .catch((err) => setHasError(true));
    }

    getData();
  }, []);

  return (
    <div>
      <div className='container'>
        {hasError ? (
          <div>Error occured.</div>
        ) : (
          catImage.length !== 0 &&
          catImage.map((cat, index) => {
            return (
              <div key={index} className="gallery__item">
                <img
                  src={cat.url}
                  alt="Alt text"
                  className="gallery__img"
                  width="300"
                  height="300"
                />
              </div>
            );
          })
        )}
        
      </div>
    </div>
  );
};

export default Cat;

