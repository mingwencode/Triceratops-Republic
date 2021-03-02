import React from 'react';
import styled from 'styled-components';

const OverviewDescription = ({ bullets }) => {
  const placeholder = '';
  return (
    <div>
      <div>Catch Phrase</div>
      <p>Once we get the data in from the API there will be some non hardcoded description here.</p>
      <ul>
        {bullets.map((bullet, idx) => (
        <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default OverviewDescription;
