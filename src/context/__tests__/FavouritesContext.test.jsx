import { renderHook, act } from '@testing-library/react';
import { FavouritesProvider, FavouritesContext } from '../FavouritesContext';
import { useContext } from 'react';

describe('FavouritesContext', () => {
  test('adds property to favourites', () => {
    const wrapper = ({ children }) => (
      <FavouritesProvider>{children}</FavouritesProvider>
    );
    
    const { result } = renderHook(() => useContext(FavouritesContext), { wrapper });
    const property = { id: 1, price: 37.5, type: "House" };

    act(() => {
      result.current.addFavourite(property);
    });

    expect(result.current.favourites).toHaveLength(1);
  });

  test('prevents duplicate favourites', () => {
    const wrapper = ({ children }) => (
      <FavouritesProvider>{children}</FavouritesProvider>
    );
    
    const { result } = renderHook(() => useContext(FavouritesContext), { wrapper });
    const property = { id: 1, price: 37.5 };

    act(() => {
      result.current.addFavourite(property);
      result.current.addFavourite(property);
    });

    expect(result.current.favourites).toHaveLength(1);
  });

  test('removes property from favourites', () => {
    const wrapper = ({ children }) => (
      <FavouritesProvider>{children}</FavouritesProvider>
    );
    
    const { result } = renderHook(() => useContext(FavouritesContext), { wrapper });
    const property = { id: 1, price: 37.5 };

    act(() => {
      result.current.addFavourite(property);
      result.current.removeFavourite(1);
    });

    expect(result.current.favourites).toHaveLength(0);
  });

  test('clears all favourites', () => {
    const wrapper = ({ children }) => (
      <FavouritesProvider>{children}</FavouritesProvider>
    );
    
    const { result } = renderHook(() => useContext(FavouritesContext), { wrapper });

    act(() => {
      result.current.addFavourite({ id: 1, price: 37.5 });
      result.current.addFavourite({ id: 2, price: 24.0 });
      result.current.clearFavourites();
    });

    expect(result.current.favourites).toHaveLength(0);
  });
});