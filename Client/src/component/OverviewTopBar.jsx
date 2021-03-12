/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';

const logo = '../images/logoFEC.png';

const TB = styled.div`
  position: 'fixed';
  background-color: rgba(67, 96, 117, .7);
  width: 'fit-content';
`;
const InnerItems = styled.div`
  display: flex;
  align-items: center;
  width: 1250px;
  margin: 0 auto 0 auto;
`;
const Logo = styled.img`
  padding-left: 10px;
  padding-right: 10px;
`;
const Title = styled.span`
  color: #030200;
  margin-left: 5px;
  font-size: xx-large;
  font-family: 'Montserrat', sans-serif;
`;
const Search = styled.span`
  justify-content: flex-end;
  /* margin-bottom: 17px; */
  padding-left: 150px;
`;
const Input = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  width: 500px;
  height: 40px;
  box-sizing: border-box;
`;
const SearchBtn = styled.button`
  justify-content: flex-end;
  background-color: #344B5B;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  margin-left: 5px;
  width: fit-content;
  border: none;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
`;

const OverviewTopBar = () => (
  <TB>
    <InnerItems>
      <Logo src={logo} alt="logo" height="80" width="95" />
      <Title>
        <span>TRICERATOP REPUBLIC</span>
      </Title>
      <Search>
        <Input name="seachBar" className="search-bar" placeholder="SEARCH" />
        <span>
          <SearchBtn className="search-bar-btn" type="submit" onClick={() => alert('Product Not Found')}>Search</SearchBtn>
        </span>
      </Search>
    </InnerItems>
  </TB>
);

export default OverviewTopBar;
