import React from 'react';

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onAdd(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;