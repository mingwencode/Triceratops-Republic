import React from 'react';
import styled from 'styled-components';

const OverviewDescription = ({ currentItem }) => {
  const placeholder = '';

  if (currentItem.id !== undefined) {
    const features = () => (
      currentItem.features.map((feature, idx) => (
        <li key={idx}>{feature.feature + feature.value}</li>
      ))
    );

    return (
      <div>
        <span className="slogan">{currentItem.slogan}</span>
        <p className="description">{currentItem.description}</p>
        <ul className="features">
          {features()}
        </ul>
      </div>
    );
  }
  return 'something';
};

export default OverviewDescription;
