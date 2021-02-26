import React, { useState } from 'react';

const QAndA = () => {
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>Question and Answer</div>
  );
};

export default QAndA;