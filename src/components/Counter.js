import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>O botão foi clicado {count} vezes.</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
};

export default Counter;