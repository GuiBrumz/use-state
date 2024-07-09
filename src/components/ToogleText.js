import React, { useState } from 'react';

const ToggleText = () => {
  const [isFirstText, setIsFirstText] = useState(true);

  const handleToggle = () => {
    setIsFirstText(!isFirstText);
  };

  return (
    <div>
      <p>{isFirstText ? 'Primeiro Texto' : 'Segundo Texto'}</p>
      <button onClick={handleToggle}>Alternar Texto</button>
    </div>
  );
};

export default ToggleText;