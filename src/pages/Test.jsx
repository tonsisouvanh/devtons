import React, { useState } from 'react';

const Test = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [categories, setCategories] = useState([
    'Web Development',
    'Graphic Design',
    'Marketing',
    // Add more existing categories...
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleCreateCategory = () => {
    const newCategory = inputValue.trim();
    if (newCategory && !categories.includes(newCategory)) {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      setSelectedOption(newCategory);
    }
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Select or create a category..."
      />
      <button onClick={handleCreateCategory}>Create</button>

      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleSelectOption(category)}
            style={{ cursor: 'pointer' }}
          >
            {category}
          </li>
        ))}
      </ul>

      <div>Selected Category: {selectedOption}</div>
    </div>
  );
};

export default Test;
