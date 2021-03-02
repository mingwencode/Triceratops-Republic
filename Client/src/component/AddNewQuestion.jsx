/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

const AddNewQuestion = ({ addQuestionButtonClick, showQuestionForm }) => {
//   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
      <button type="button" onClick={() => addQuestionButtonClick()}>Add A Question +</button>
      <span>{showQuestionForm()}</span>
    </div>
  );
};

AddNewQuestion.propTypes = {
  addQuestionButtonClick: PropTypes.func.isRequired,
  showQuestionForm: PropTypes.func.isRequired,
};

export default AddNewQuestion;
