
import { Dispatch } from 'redux';
import { Brewery } from '../utils/types';

export const BREWERIES_FAVOURITE_BREWERY = 'BREWERIES_FAVOURITE_BREWERY';
export const addToFavourites = (dispatch: Dispatch, id: number): void => {
  dispatch({ type: BREWERIES_FAVOURITE_BREWERY, params: { id }});
}

export const BREWERIES_GET_REQUEST = 'BREWERIES_GET_REQUEST';
export const BREWERIES_GET_SUCCESS = 'BREWERIES_GET_SUCCESS';
export const BREWERIES_GET_FAILURE = 'BREWERIES_GET_FAILURE';
export const getBreweries = (dispatch: Dispatch, city?: string): void => {
  const query: string = city ? `?by_city=${city.toLowerCase().replace(' ', '%20')}` : '';
  dispatch({ type: BREWERIES_GET_REQUEST, params: { queryCity: city || null } });
  fetch(`https://api.openbrewerydb.org/breweries${query}`)
    .then((response) => response.json())
    .then((res: Array<Brewery>) => (
      dispatch({ type: BREWERIES_GET_SUCCESS, params: { breweries: res }})
    ))
    .catch(() => dispatch({ type: BREWERIES_GET_FAILURE }));
}

export const BREWERIES_SELECT_BREWERY = 'BREWERIES_SELECT_BREWERY';
export const selectBrewery = (dispatch: Dispatch, id: number): void => {
  dispatch({ type: BREWERIES_SELECT_BREWERY, params: { id }});
}
