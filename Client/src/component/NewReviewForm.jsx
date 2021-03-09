/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  borderRadius: 10,
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

const ButtonFixed = styled.button`
border: none;
background: none;
font-size: 1.5em;
color: #344B5B;
&:focus{
  outline: none;
}
&:hover{
  color: #A4BBCB;
  transform: scale(1.5, 1.5);
}
 `;

const SubmitFormStyle = styled.input`
display: flex;
justify-content: center;
background-color: #344B5B;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 500;
padding: 8px;
margin: 3px;
width: fit-content;
height: 40px;
border: none;
outline: none;
border-radius: 8px;
box-sizing: border-box;
`
const StyledPMessage = styled.span`
  color: red;
  font-family: 'Roboto', sans-serif;
  font-size: small;
  padding: 2px;
`;

const StyledH2 = styled.h2`
  background: rgba(203, 216, 225, 1);
  font-family: 'Shippori Mincho', serif;
  border-radius: 8px;
  box-sizing: border-box;
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
const StyledSpanFont = styled.span`
font-family: 'Roboto', sans-serif;
`
const StyledSpanLabel = styled.label`
font-family: 'Roboto', sans-serif;
`
const Styledh3 = styled.h3`
font-family: 'Shippori Mincho', serif;
`
const StyledLegend = styled.legend`
font-family: 'Roboto', sans-serif;

`

const TABLE = { border: '1px white' };
const NewReviewForm = ({
  showNewReviewModal, currentProductId, setNewReviewModal, sampleCharacterObj, reviewMetaData, getReviews, currentItem
}) => {
  const [rating, setStarRating] = useState();
  const [recommend, setIsRecommended] = useState();
  const [summary, setChangeSummary] = useState('');
  const [body, setChangeReview] = useState('');
  const [thumbnail, setThumbnail] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);
  // eslint-disable-next-line camelcase
  const [reviewer_name, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [characisticsState, setCharacteristicsState] = useState({});

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

 const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

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
                <StyledSpanFont
                >
                  {key}
                </StyledSpanFont>
              </td>
              <div style={{fontSize: 10}}>
              <td>
                <input
                  type="radio"
                  name={key}
                  required="reduired"
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 1 })}
                />
                <StyledSpanLabel>
                  {sampleCharacterObj[key][1]}
                </StyledSpanLabel>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 2 })}
                />
                <StyledSpanLabel>
                  {sampleCharacterObj[key][2]}
                </StyledSpanLabel>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 3 })}
                />
                <StyledSpanLabel>
                  {sampleCharacterObj[key][3]}
                </StyledSpanLabel>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({ ...characisticsState, [characteristicKey]: 4 })}
                />
                <StyledSpanLabel>
                  {sampleCharacterObj[key][4]}
                </StyledSpanLabel>
              </td>
              <td>
                <input
                  type="radio"
                  name={key}
                  onClick={() => setCharacteristicsState({...characisticsState, [characteristicKey]: 5 })}
                />
                <StyledSpanLabel>
                  {sampleCharacterObj[key][5]}
                </StyledSpanLabel>
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
    setThumbnail([]);
    setNickname();
    setEmail();
    setCharacteristicsState({});
    setImageUpload([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const promises = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const photo of imageUpload) {
      const payload = {
        name: photo.name,
        data: '',
      };
      const promise = toBase64(photo)
        // eslint-disable-next-line prefer-destructuring
        .then((result) => payload.data = result.split(',')[1])
        .then(() => axios.post('/upload_images', payload))
        .then(({ data }) => data)
        .catch(console.log);
      promises.push(promise);
    }
    Promise.all(promises)
      .then((results) => postCharacteristicsObj.photos = results)
      .then(() => {
        return axios.post('/reviews', postCharacteristicsObj);
      })
      .then(()=> getReviews(currentProductId))
      .then(()=> setNewReviewModal(false))
      .then(()=> clearForm())
  };
  const onPhotoUpload = (e) => {
    const imageArray = [];
    for (let i = 0; i < imageUpload.length; i += 1) {
      imageArray.push(imageUpload[i]);
    }
    imageArray.push(e.target.files[0]);
    setImageUpload(imageArray);

    const thumbnailArray = [];
    for (let i = 0; i < thumbnail.length; i += 1) {
      thumbnailArray.push(thumbnail[i]);
    }
    thumbnailArray.push(URL.createObjectURL(e.target.files[0]));
    setThumbnail(thumbnailArray);
  };

  const starRatingText = () => {
    if (rating === 1) {
      return (
        <StyledSpanFont>Poor</StyledSpanFont>
      );
    }
    if (rating === 2) {
      return (
        <StyledSpanFont>Fair</StyledSpanFont>
      );
    }
    if (rating === 3) {
      return (
        <StyledSpanFont>Average</StyledSpanFont>
      );
    }
    if (rating === 4) {
      return (
        <StyledSpanFont>Good</StyledSpanFont>
      );
    }
    if (rating === 5) {
      return (
        <StyledSpanFont>Great</StyledSpanFont>
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
          <ButtonFixed
            type="button"
            onClick={() => setNewReviewModal(!showNewReviewModal)}
          >
            &#8855;
          </ButtonFixed>
          <StyledH2> Write Your Review</StyledH2>
          <Styledh3>
            About the
            {' '}
            {currentItem.name}
          </Styledh3>
          <StyledLegend>Overall Rating*</StyledLegend>
          <div className="rating">
            <div className="txt-center">
              <form>
                <div className="rating">
                  <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" required="required" onClick={() => setStarRating(5)}/>
                  <label htmlFor="star5">☆</label>
                  <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" onClick={() => setStarRating(4)}/>
                  <label htmlFor="star4">☆</label>
                  <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" onClick={() => setStarRating(3)}/>
                  <label htmlFor="star3">☆</label>
                  <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" onClick={() => setStarRating(2)}/>
                  <label htmlFor="star2">☆</label>
                  <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" onClick={() => setStarRating(1)}/>
                  <label htmlFor="star1">☆</label>
                  <div className="clear" />
                </div>
              </form>
              {starRatingText()}
            </div>
          </div>
          <div>
            <StyledLegend>Do You Recommend?*</StyledLegend>
            <input
              type="radio"
              id="yes"
              name="Recommend"
              value="yes"
              onChange={() => setIsRecommended(true)}
            />
            <StyledSpanLabel
              htmlFor="yes"
              title="Recommended"
            >
              Yes
            </StyledSpanLabel>
            <input
              type="radio"
              id="no"
              name="Recommend"
              value="no"
              onChange={() => setIsRecommended(false)}
              required="required"
            />
            <StyledSpanLabel
              htmlFor="no"
              title="notRecommended"
            >
              No
            </StyledSpanLabel>
          </div>
          <div>
            <StyledSpanLabel id="charTitle">Characteristics*</StyledSpanLabel>
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
            <StyledSpanLabel
              htmlFor="Summary"
              title="ReviewSummary"
            >
              Review Summary
            </StyledSpanLabel>
            <br />
            <SyledTextarea
              placeholder="Example: Best Purchase ever"
              maxLength="60"
              value={summary}
              onChange={(event) => setChangeSummary(event.target.value)}
            />
          </div>
          <div>
            <StyledSpanLabel
              htmlFor="Review"
              title="ReviewBody"
            >
              Review Body*
            </StyledSpanLabel>
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
            {thumbnail.map((image, index) => <img src={image} key={index} alt="uploaded by user" height="50" width="50" />)}
          </div>
          <div>
            <StyledSpanLabel
              htmlFor="nickname"
              title="nickname"
            >
              What Is Your Nickname?*
            </StyledSpanLabel>
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
            <br />
          </div>
          <div>
            <StyledSpanLabel
              htmlFor="email"
              title="email"
              required="required"
              maxLength="60"
            >
              Email*
            </StyledSpanLabel>
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
