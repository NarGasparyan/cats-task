import { useEffect, useState } from "react";
import  './Select.css';

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

 function SelectCategory() {
  const [options, setOption] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch("https://api.thecatapi.com/v1/categories ")
        .then((res) => res.json())
        .then((data) => setOption(data));
    }

    getData();
  }, [options, selectedCategory]);

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <select
        className='selectCss'
        value={selectedCategory}
        onChange={handleChangeCategory}
      >
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {options?.length &&
          options.map((option, index) => (
            <option key={index} value={option.id}>
              {capitalizeName(option.name)}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectCategory;
