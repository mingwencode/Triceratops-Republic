import React from 'react';
// import logo from 'Client/src/images/logoFEC.png';

// const logo = path.join(__dirname, '..', 'images');
// console.log(__dirname)
const logo = "Client/src/images/logoFEC.png"

const OverviewTopBar = () => (
  <div>
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
  </div>
);

export default OverviewTopBar;
