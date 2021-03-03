import React from 'react';
import styled from 'styled-components';

const logo = 'Client/src/images/logoFEC.png';

const TPBody = styled.div`
  color: purple;
`;

const OverviewTopBar = () => (
  <TPBody>
    <div>
      <img src={logo} alt="logo" />
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
