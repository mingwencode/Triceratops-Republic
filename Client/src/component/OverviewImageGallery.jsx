/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import OverviewModal from './OverviewModal';
import Thumbnails from './OverviewThumbnails';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 15% 10% 65% 10%;
  grid-template-rows: 30px 1fr 30px;
  margin-top: 10px;
`;
const Carousel = styled.div`
  transform: scale(1.05, 1.05);
  grid-column: 1;
  grid-row: 2/3;
`;
const BtnTop = styled.div`
  grid-area: 1/1/2/2;
  margin-left: auto;
  margin-right: auto;
`;
const BtnBottom = styled.div`
  grid-column: 1;
  grid-row: 3/4;
  margin-left: auto;
  margin-right: auto;
`;
const Button = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  color: #344B5B;
  &:focus{
    outline: none;
  }
  &:hover{
    transform: scale(1.8, 1.8);
  }
  &:active{
    transform: scale(1, 1);
  }
`;
const Modal = styled.div`
  display: flex;
  justify-content: flex-start;
  grid-column: 4/5;
  grid-row: 1/2;
  z-index: 1000;
`;
const BtnLeft = styled.span`
  grid-column: 2/3;
  grid-row: 2;
  align-self: center;
`;
const BtnRight = styled.span`
  grid-column: 4/5;
  grid-row: 2;
  align-self: center;
`;
const Image = styled.span`
  grid-column: 3/4;
  grid-row: 1/4;
`;
const Img = styled.img`
  height: 500px;
  max-width: 370px;
  object-fit: cover;
  border-radius: 5px;
`;

const OverviewImageGallery = ({ productStyles }) => {
  const [currentImage, setImage] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const thumbContainer = React.useRef();

  const onThumbnailClick = (idx) => {
    setImage(idx);
    setMainImageIndex(idx);
  };

  useEffect(() => {
    thumbContainer.current.style.transitionDuration = '0.5s';
    thumbContainer.current.style.transform = `translate(0, -${60 * currentImage}px)`;
  }, [currentImage]);

  const handleNext = () => {
    if (currentImage < thumbContainer.current.children.length - 1) {
      setImage(((prevImage) => prevImage + 1));
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setImage((nextImage) => nextImage - 1);
    }
  };

  const handleMainNext = () => {
    if (mainImageIndex < productStyles.results.length - 1) {
      setMainImageIndex((prevImage) => prevImage + 1);
    }
  };

  const handleMainPrev = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex((nextImage) => nextImage - 1);
    }
  };

  return (
    <Gallery>
      <BtnTop>
        {currentImage === productStyles.results.length - 1 ? null : <Button id="next" type="button" onClick={handleNext}>⌃</Button>}
      </BtnTop>
      <Carousel>
        <div className="view-port" style={styles.view_port}>
          <div
            ref={thumbContainer}
            className="thumbnail-container"
            style={styles.thumbnail_container}
          >
            {productStyles.results.map((image, idx) => (
              <div key={idx}>
                <Thumbnails
                  idx={idx}
                  image={image.photos[0].url}
                  onThumbnailClick={onThumbnailClick}
                />
              </div>
            ))}
          </div>
        </div>
      </Carousel>
      <BtnBottom>
        {currentImage === 0 ? null : <Button id="prev" type="button" onClick={handlePrevious}>⌄</Button>}
      </BtnBottom>
      <BtnLeft>
        {mainImageIndex === 0 ? null : <Button type="button" onClick={handleMainPrev}>&#8249;</Button>}
      </BtnLeft>
      <Modal>
        <Button onClick={() => setIsOpen(true)}>&#10545;</Button>
        <OverviewModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          productStyles={productStyles}
        />
      </Modal>
      <Image>
        <Img className="main-image" src={productStyles.results[mainImageIndex].photos[0].url} alt="main diplay" height="500px" width="500px" />
      </Image>
      <BtnRight>
        {mainImageIndex === productStyles.results.length - 1 ? null : <Button type="button" onClick={handleMainNext}>&#8250;</Button>}
      </BtnRight>
    </Gallery>
  );
};

const styles = {
  view_port: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '420px',
    overflow: 'hidden'
  },
  thumbnail_container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content'
  }
};

export default OverviewImageGallery;
