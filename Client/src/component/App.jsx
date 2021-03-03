import React, { useState } from 'react';
import axios from 'axios';
import Overview from './Overview';
import RatingsAndReviews from './RatingsAndReviews';
import QAndA from './QAndA';
import RelatedProducts from './RelatedProducts';

const App = () => {
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  //useEffect takes two arguments

  return (
    <div>
      <Overview />
      <RelatedProducts />
      <QAndA />
      <RatingsAndReviews />
    </div>
  );
};

export default App;
