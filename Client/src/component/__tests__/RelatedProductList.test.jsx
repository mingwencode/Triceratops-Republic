import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import RelatedProductsList from '../RelatedProductsList';

const sampleCurrentProduct = {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
}

const sampleProductList = 
[sampleCurrentProduct,
    {
        "id": 2,
        "name": "Product 2",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },
    {
        "id": 3,
        "name": "Product 3",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },
]

describe('RelatedProductList', () => {
  test('renders items if length = relatedlist length', () => {
    render(<RelatedProductsList
            len={ 3 }
            setCurrentProductId= { () => {} }
            currentItem= { sampleCurrentProduct }
            relatedList={ sampleProductList } />);
    screen.getByText('Camo Onesie');
    screen.getByText('Product 2');
    screen.getByText('Product 3');
  });

  test('Next button should not render if length = 2', () => {
    render(<RelatedProductsList
            len={ 2 }
            setCurrentProductId= { () => {} }
            currentItem= { sampleCurrentProduct }
            relatedList={ sampleProductList } />);
    console.log('I am running!')
    const result = screen.queryAllByTestId('nextSlideButtonTestId')
    expect(result.length).toBe(0)
  });

  test('Next button should render if length = 5', () => {
    render(<RelatedProductsList
            len={ 5 }
            setCurrentProductId= { () => {} }
            currentItem= { sampleCurrentProduct }
            relatedList={ sampleProductList } />);
    console.log('I am running!')
    const result = screen.queryAllByTestId('nextSlideButtonTestId')
    expect(result.length).toBe(1)
  });
});