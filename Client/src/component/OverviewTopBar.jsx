import React from 'react';
import styled from 'styled-components';

// const logo = './logoFEC.png';

const TPBody = styled.div`
  color: purple;
`;

const OverviewTopBar = () => (
  <TPBody>
    <div>
      <img src="../images/logoFEC.png" alt="logo" height="50" width="50" />
      <h4>Triceratop Republic</h4>
    </div>
    <div>
      <form>
        <input name="seachBar" className="search-bar" placeholder="Search" />
      </form>
      <button className="search-bar-btn" type="submit">Search</button>
    </div>
  </TPBody>
);

export default OverviewTopBar;
