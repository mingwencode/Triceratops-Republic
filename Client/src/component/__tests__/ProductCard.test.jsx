/**
//  * @jest-environment jsdom
//  */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

const item = {
    id: 133183,
    name: "babyshark hat",
    category: 'seafood',
    price: '100',
    features: {feature:'fin', value: true},
    url: 'www.shark.com',
    starPercent: 63,
    slogan: 'shark test',
    description: 'shark test',
    largeUrl: 'www.shark.com',
    salePrice: null,
    };

const current = {
  id: 133184,
  name: 'babyshark hat',
  category: 'seafood',
  price: 100,
  features: {feature:'fin', value: true},
  url: 'www.shark.com',
  starPercent: 63,
  slogan: 'shark test',
  description: 'shark test',
  largeUrl: 'www.shark.com',
  salePrice: 20,
  }

describe('Product Card', () => {
  test('renders image on related list:', () => {
    render(<ProductCard
      product={current}
      list='list'
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByTestId('relatedListImage');
  });
});

describe('Product Card', () => {
  test('renders compare button on related list:', () => {
    render(<ProductCard
      product={current}
      list='list'
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByTestId('compareBtn');
  });
});


describe('Product Card', () => {
  test('renders image on outfit list:', () => {
    render(<ProductCard
      product={current}
      list={null}
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByTestId('relatedOutfitImage');
  });
});

describe('Product Card', () => {
  test('show name, categroy, price', () => {
    render(<ProductCard
      product={current}
      list={null}
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByText('babyshark hat');
    screen.getByText('seafood');
    screen.getByText('$100');
  });
});

describe('Product Card', () => {
  test('renders close button on outfit list:', () => {
    render(<ProductCard
      product={current}
      list={null}
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByTestId('closeBtn');
  });
});

describe('Product Card', () => {
  test('show sale price and default price', () => {
    render(<ProductCard
      product={current}
      list='list'
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByText('$20');
    screen.getByText('$100');
  });
});

describe('Product Card', () => {
  test('show ONLY default price', () => {
    render(<ProductCard
      product={item}
      list='list'
      removeOutFit={() => {}}
      setCurrentProductId={()=>{}}
      currentItem={[]}
    />);
    screen.getByText('$100');
  });
});