/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const NewReviewForm = ({ showNewReviewModal, setNewReviewModal }) => {
  const [rating, clickStar] = useState(5);
  const [recommend, isRecomnended] = useState(undefined);
  const [summary, changeSummary] = useState('');
  const [body, changeReview] = useState('');
  const [photos, uploadPhoto] = useState(null);
  // eslint-disable-next-line camelcase
  const [reviewer_name, inputNickname] = useState('');


  const characterObj = [
    {
      0: 'Size',
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide',
    },
    {
      0: 'Width',
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    {
      0: 'Comfort',
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    {
      0: 'Quality',
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
    {
      0: 'Length',
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
    {
      0: 'Fit',
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
  ];

  const renderTableHeader = () => {
    const header = Object.keys(characterObj[0]);
    return header.map((key) => <th key={key + 1}>{key.toUpperCase()}</th>);
  };
  const renderTableData = () => characterObj.map((characteristic) => (
    // eslint-disable-next-line react/no-array-index-key
    <tr key={characteristic[0]}>
      <td />
      <td>
        <button
          type="button"
        >
          {characteristic[0]}
        </button>
      </td>
      <td>
        <button
          type="button"
        >
          {characteristic[1]}
        </button>
      </td>
      <td>
        <button
          type="button"
        >
          {characteristic[2]}
        </button>
      </td>
      <td>
        <button
          type="button"
        >
          {characteristic[3]}
        </button>
      </td>
      <td>
        <button
          type="button"
        >
          {characteristic[4]}
        </button>
      </td>
      <td>
        <button
          type="button"
        >
          {characteristic[5]}
        </button>
      </td>

    </tr>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewReviewModal(false);
  };
  const onPhotoUpload = (event) => {
    uploadPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const starRatingTextOne = () => {
    if (rating === 1) {
      return (
        <span>Poor</span>
      );
    }
  };
  const starRatingTextTwo = () => {
    if (rating === 2) {
      return (
        <span>Fair</span>
      );
    }
  };
  const starRatingTextThree = () => {
    if (rating === 3) {
      return (
        <span>Average</span>
      );
    }
  };
  const starRatingTextFour = () => {
    if (rating === 4) {
      return (
        <span>Good</span>
      );
    }
  };
  const starRatingTextFive = () => {
    if (rating === 5) {
      return (
        <span>Great</span>
      );
    }
  };

  if (!showNewReviewModal) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <form>
          <h2> Write a New Review</h2>
          <div className="rating">
            <legend>Overall Rating*</legend>
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              defaultChecked
              onClick={() => clickStar(5)}
            />
            {starRatingTextFive()}
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              onClick={() => clickStar(4)}
            />
            {starRatingTextFour()}
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              onClick={() => clickStar(3)}
            />
            {starRatingTextThree()}
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              onClick={() => clickStar(2)}
            />
            {starRatingTextTwo()}
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              onClick={() => clickStar(1)}
            />
            {starRatingTextOne()}
          </div>
          <div>
            <legend>Do You Recommend?*</legend>
            <input
              defaultChecked
              type="radio"
              id="yes"
              name="Recommend"
              value="yes"
              onChange={() => isRecomnended(true)}
            />
            <label
              htmlFor="yes"
              title="Recommended"
            >
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="Recommend"
              value="no"
              onChange={() => isRecomnended(false)}
            />
            <label
              htmlFor="no"
              title="notRecommended"
            >
              No
            </label>
          </div>
          <div>
            <label id="charTitle">Characteristics*</label>
            <table id="characteristics">
              <tbody>
                <tr>
                  {renderTableHeader()}
                </tr>
                {renderTableData()}
              </tbody>
            </table>
          </div>
          <div>
            <label
              htmlFor="Summary"
              title="ReviewSummary"
            >
              Review Summary
            </label>
            <textarea
              placeholder="Example: Best Purchase ever"
              maxLength="60"
              value={summary}
              onChange={(event) => changeSummary(event.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="Review"
              title="ReviewBody"
            >
              Review Body*
            </label>
            <textarea
              placeholder="Why did you like the product or not?"
              minLength="50"
              maxLength="1000"
              required="required"
              value={body}
              onChange={(event) => changeReview(event.target.value)}
            />
          </div>
          <div>
            <input
              type="file"
              name="photo"
              onChange={onPhotoUpload}
            />
            <img
              src={photos}
              alt="User uploaded"
            />
          </div>
          <div>
            <label
              htmlFor="nickname"
              title="nickname"
            >
              What Is Your Nickname?*
            </label>
            <input
              type="textbox"
              placeholder="Example: jackson11!"
              required="required"
              maxLength="60"
              // eslint-disable-next-line camelcase
              value={reviewer_name}
              onChange={(event) => inputNickname(event.target.value)}
            />
            <span>
              For privacy reasons, do not use your full name or email address
            </span>
          </div>
          <div>
            <label
              htmlFor="email"
              title="email"
              required="required"
              maxLength="60"
            >
              Email*
            </label>
            <input
              type="email"
              placeholder="Example: jackson11@email.com"
            />
            <span>
              For authentication reasons, you will not be emailed
            </span>
          </div>
          <button
            type="submit"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            Submit Review
          </button>
        </form>
      </div>
    </>,
    document.getElementById('portal'),
  );
};
// NewReviewForm.propTypes = {
//   rating: PropTypes.number.isRequired,
//   recommend: PropTypes.string.isRequired,
//   reviewSummary: PropTypes.string.isRequired,
//   reviewBody: PropTypes.string.isRequired,
// };

export default NewReviewForm;
