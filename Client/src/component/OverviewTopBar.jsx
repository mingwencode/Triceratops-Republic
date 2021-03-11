import React from 'react';
import styled from 'styled-components';

const logo = '../images/logoFEC.png';

const TB = styled.div`
  display: flex;
  position: 'fixed';
  background-color: rgba(67, 96, 117, .7);
  width: 'fit-content';
  border-radius: 10px;
`;

const Logo = styled.img`
  display: inline;
  justify-content: flex-start;
  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.span`
  color: #030200;
  margin-top: 23px;
  margin-left: 5px;
  font-size: x-large;
  font-family: 'Montserrat', sans-serif;
`;

const Search = styled.span`
  justify-content: flex-end;
  margin: 7px;
  self-align: center;
  padding-left: 200px;
`;
const Input = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  width: 500px;
  height: 30px;
  box-sizing: border-box;
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
    <Logo src={logo} alt="logo" height="65" width="80" />
    <Title>
      <span>TRICERATOPS REPUBLIC</span>
    </Title>
    <Search>
      <Input name="seachBar" className="search-bar" placeholder="Search" />
      <span>
        <SearchBtn className="search-bar-btn" type="submit" onClick={() => alert('Product Not Found')}>Search</SearchBtn>
      </span>
    </Search>
  </TB>
);

export default OverviewTopBar;
