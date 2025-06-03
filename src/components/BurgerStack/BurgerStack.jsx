import React from 'react';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onRemove(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;