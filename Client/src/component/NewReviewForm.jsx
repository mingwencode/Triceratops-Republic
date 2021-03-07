/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

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


const Button = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Shippori Mincho', serif;
padding: 10px;
margin: 5px;
width: fit-content;
border: none;
outline: none;
border-radius: 10px;
box-sizing: border-box;
 `;


const SubmitFormStyle = styled.input`
background-color: #344B5B;
color: white;
font-family: 'Shippori Mincho', serif;
padding: 10px;
margin: 5px;
width: fit-content;
border: none;
outline: none;
border-radius: 10px;
box-sizing: border-box;
text-align: center;
`
const StyledPMessage = styled.p`
  color: red;
  font-family: 'Shippori Mincho', serif;
  font-size: small;
  padding: 2px;
`;

const StyledH2 = styled.h2`
  font-family: 'Shippori Mincho', serif;
  font-weight: bold;
  color: #012626;
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 3px;
  margin: 5px;
  width: 250px;
  box-sizing: border-box;
  text-align: center;
`;
const SyledTextarea = styled.textarea`
border: 1px solid #000;
border-radius: 10px;
padding: 3px;
margin: 5px;
width: 250px;
box-sizing: border-box;
`

const TABLE = { border: '1px white' };
const NewReviewForm = ({
  showNewReviewModal, currentProductId, setNewReviewModal, sampleCharacterObj, reviewMetaData, getReviews
}) => {
  const [rating, setStarRating] = useState(5);
  const [recommend, setIsRecommended] = useState();
  const [summary, setChangeSummary] = useState('');
  const [body, setChangeReview] = useState('');
  const [photos, setUploadPhoto] = useState(null);
  // eslint-disable-next-line camelcase
  const [reviewer_name, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [characisticsState, setCharacteristicsState] = useState({});

  const postReviews = (review) => {
    axios.post('/reviews', review)
      .then(() => getReviews(currentProductId))
      .catch((err) => console.log('post review ', err));
  };


  const postCharacteristicsObj = {
    product_id: currentProductId,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: reviewer_name,
    email: email,
    photos: [],
    characteristics: characisticsState,
 };


  const renderCharacteristics = () => {
    if (reviewMetaData) {
      const reviewChars = reviewMetaData.characteristics;
      // eslint-disable-next-line no-restricted-syntax

      const charObjKeys = Object.keys(sampleCharacterObj);
      // eslint-disable-next-line consistent-return
      return charObjKeys.map((key, index) => {
        if (reviewChars[key]) {
          let characteristicKey = JSON.stringify(reviewChars[key].id);
          return (
            <tr key={index}>
              <td />
              <td>
                <span
                >
                  {key}
                </span>
              </td>
              <div style={{fontSize: 10}}>
              <td>
                <input
                  type="radio"
                  name={key}
                  required="reduired"
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 1 })}
                />
                <label>
                  {sampleCharacterObj[key][1]}
                </label>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 2 })}
                />
                <label>
                  {sampleCharacterObj[key][2]}
                </label>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 3 })}
                />
                <label>
                  {sampleCharacterObj[key][3]}
                </label>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 4 })}
                />
                <label>
                  {sampleCharacterObj[key][4]}
                </label>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({...characisticsState, [characteristicKey]: 5 })}
                />
                <label>
                  {sampleCharacterObj[key][5]}
                </label>
              </td>
              </div>

            </tr>
          );
        }
      });
    }
  };


  const clearForm = () => {
    setStarRating();
    setIsRecommended();
    setChangeSummary();
    setChangeReview();
    setUploadPhoto();
    setNickname();
    setEmail();
    setCharacteristicsState();
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    postReviews(postCharacteristicsObj);
    setNewReviewModal(false);
    clearForm();
  };
  const onPhotoUpload = (event) => {
    setUploadPhoto(URL.createObjectURL(event.target.files[0]));
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
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Button
            type="button"
            onClick={() => setNewReviewModal(!showNewReviewModal)}
          >
            X
          </Button>
          <StyledH2> Write Your Review</StyledH2>
          <h3> About the [Product Name Here] </h3>
          <div className="rating">
            <legend>Overall Rating*</legend>
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              required="required"
              onClick={() => setStarRating(5)}
            />
            {starRatingTextFive()}
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              onClick={() => setStarRating(4)}
            />
            {starRatingTextFour()}
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              onClick={() => setStarRating(3)}
            />
            {starRatingTextThree()}
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              onClick={() => setStarRating(2)}
            />
            {starRatingTextTwo()}
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              onClick={() => setStarRating(1)}
            />
            {starRatingTextOne()}
          </div>
          <div>
            <legend>Do You Recommend?*</legend>
            <input
              type="radio"
              id="yes"
              name="Recommend"
              value="yes"
              onChange={() => setIsRecommended(true)}
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
              onChange={() => setIsRecommended(false)}
              required="required"
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
            <table id="characteristics" style={TABLE}>
              <tbody style={TABLE}>
                <tr style={TABLE}>
                  {/* {renderTableHeader()} */}
                </tr>
                {renderCharacteristics()}
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
            <br />
            <SyledTextarea
              placeholder="Example: Best Purchase ever"
              maxLength="60"
              value={summary}
              onChange={(event) => setChangeSummary(event.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="Review"
              title="ReviewBody"
            >
              Review Body*
            </label>
            <br />
            <SyledTextarea
              placeholder="Why did you like the product or not?"
              minLength="50"
              maxLength="1000"
              required="required"
              value={body}
              onChange={(event) => setChangeReview(event.target.value)}
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
              height="50"
              width="50"
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
            <Input
              type="textbox"
              placeholder="Example: jackson11!"
              required="required"
              maxLength="60"
              // eslint-disable-next-line camelcase
              value={reviewer_name}
              onChange={(event) => setNickname(event.target.value)}
            />
            <br />
            <StyledPMessage style={{ fontSize: 12 }}>
              For privacy reasons, do not use your full name or email address
            </StyledPMessage>
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
            <Input
              type="email"
              placeholder="Example: jackson11@email.com"
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <StyledPMessage style={{ fontSize: 12 }}>
              For authentication reasons, you will not be emailed
            </StyledPMessage>
          </div>
          <SubmitFormStyle
            type="submit"
            name="submit"
          />
        </form>
      </div>
    </>
  );
};

export default NewReviewForm;
