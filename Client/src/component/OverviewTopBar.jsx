import React from 'react';
import styled from 'styled-components';

const logo = '../images/logoFEC.png';

const TB = styled.span`
  display: flex;
  background-color: rgba(89, 88, 93, .7);
`;

const Logo = styled.span`
  justify-content: flex-start;
`;

const Title = styled.span`
  color: #cac3bb;
  margin-top: 10px;
`;

const Search = styled.span`
  justify-content: flex-end;
  margin: 7px;
`;

const SearchBtn = styled.button`
  justify-content: flex-end;
  background-color: #344B5B;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  margin: 5px;
  width: fit-content;
  border: none;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
`;

const OverviewTopBar = () => (
  <TB>
    <Logo>
      <img src={logo} alt="logo" height="70" width="70" />
    </Logo>
    <Title>
      <h2>Triceratop Republic</h2>
    </Title>
    <Search>
      <input name="seachBar" className="search-bar" placeholder="Search" />
    </Search>
    <span>
      <SearchBtn className="search-bar-btn" type="submit">Search</SearchBtn>
    </span>
  </TB>
);

export default OverviewTopBar;
