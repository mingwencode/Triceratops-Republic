import React from 'react';
import styled from 'styled-components';

const logo = '../images/logoFEC.png';

const topBarStyle = {
  display: 'flex',
  justifyContent: 'flex-start'
}

const search = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const OverviewTopBar = () => (
  <div>
    <div style={topBarStyle}>
      <img src={logo} alt="logo" height="50" width="50" />
      <h4>Triceratop Republic</h4>
    </div>
    <div style={search}>
      <form>
        <input name="seachBar" className="search-bar" placeholder="Search" />
      </form>
      <button className="search-bar-btn" type="submit">Search</button>
    </div>
  </div>
);

export default OverviewTopBar;
