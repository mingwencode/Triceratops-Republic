import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import RatingsAndReviews from '../RatingsAndReviews';

const sampleCurrentProduct = {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
}

const mockReviewMetadata = {
    "product_id": "20111",
    "ratings": {
        "1": "11",
        "2": "3",
        "3": "15",
        "4": "10",
        "5": "10"
    },
    "recommended": {
        "false": "24",
        "true": "25"
    },
    "characteristics": {
        "Fit": {
            "id": 67535,
            "value": "3.4423076923076923"
        },
        "Length": {
            "id": 67536,
            "value": "3.5000000000000000"
        },
        "Comfort": {
            "id": 67537,
            "value": "3.5000000000000000"
        },
        "Quality": {
            "id": 67538,
            "value": "3.3269230769230769"
        }
    }
 }

const mockReviews = {
    "product": "20587",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 257610,
            "rating": 3,
            "summary": "Iure non inventore itaque.",
            "recommend": true,
            "response": null,
            "body": "Harum et incidunt corrupti ipsa. Dicta ex odio molestias ab repellat occaecati tempora. Voluptatem temporibus amet in. Sint reprehenderit consequatur fugiat fugiat.",
            "date": "2020-07-27T00:00:00.000Z",
            "reviewer_name": "Verla.Grady61",
            "helpfulness": 25,
            "photos": [
                {
                    "id": 438719,
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "id": 438720,
                    "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
                },
                {
                    "id": 438721,
                    "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ]
        },
        {
            "review_id": 257612,
            "rating": 1,
            "summary": "Fugit voluptatem nisi ut voluptatem sint ut nesciunt.",
            "recommend": false,
            "response": null,
            "body": "Aut explicabo asperiores. Placeat deleniti quos facilis aliquid. Nulla ea necessitatibus hic reiciendis enim perferendis.",
            "date": "2020-03-26T00:00:00.000Z",
            "reviewer_name": "Sheridan27",
            "helpfulness": 24,
            "photos": [
                {
                    "id": 438717,
                    "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                }
            ]
        },
        {
            "review_id": 257611,
            "rating": 4,
            "summary": "Deleniti odit voluptatem non deleniti et.",
            "recommend": true,
            "response": null,
            "body": "Ea nulla distinctio rerum. Quo totam quis. Neque dolorem rerum fugit aut harum nam. Harum ut qui eum explicabo adipisci eveniet consequatur est excepturi. Ad a quo error occaecati.",
            "date": "2020-02-26T00:00:00.000Z",
            "reviewer_name": "Buck44",
            "helpfulness": 19,
            "photos": [
                {
                    "id": 438718,
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                }
            ]
        }
    ]
}

describe('RatingsAndReviews', () => {
  test('RatingsAndReviews intitial load', () => {
    const results = render(<RatingsAndReviews
            mockReviews={ mockReviews }
            currentProductId={ 1 }
            currentItem={ sampleCurrentProduct }
            mockReviewMetadata={ mockReviewMetadata } />);
    // How do I print what is being rendered?

    // How do I wait for useEffects to run? (async)

    const result = screen.queryAllByTestId('newFormButton')
    expect(result.length).toBe(1)
  });
});