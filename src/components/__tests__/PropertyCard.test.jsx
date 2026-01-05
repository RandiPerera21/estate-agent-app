import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import { FavouritesContext } from '../../context/FavouritesContext';

const mockProperty = {
  id: 1,
  type: "House",
  price: 37.5,
  bedrooms: 4,
  shortDesc: "Spacious family house",
  postcode: "Colombo 05",
  location: "Colombo 05"
};

const mockContextValue = {
  addFavourite: jest.fn(),
  removeFavourite: jest.fn(),
  isFavourite: jest.fn(() => false)
};

describe('PropertyCard Component', () => {
  test('renders property information correctly', () => {
    render(
      <BrowserRouter>
        <FavouritesContext.Provider value={mockContextValue}>
          <PropertyCard property={mockProperty} />
        </FavouritesContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Rs. 37.5 million/i)).toBeInTheDocument();
    expect(screen.getByText(/Spacious family house/i)).toBeInTheDocument();
  });

  test('calls addFavourite when favourite button is clicked', () => {
    render(
      <BrowserRouter>
        <FavouritesContext.Provider value={mockContextValue}>
          <PropertyCard property={mockProperty} />
        </FavouritesContext.Provider>
      </BrowserRouter>
    );

    const favButton = screen.getByTitle(/add to favourites/i);
    fireEvent.click(favButton);

    expect(mockContextValue.addFavourite).toHaveBeenCalledWith(mockProperty);
  });
});