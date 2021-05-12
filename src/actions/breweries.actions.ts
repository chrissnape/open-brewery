
import { Dispatch } from 'redux';
import { Brewery } from '../utils/types';

export const BREWERIES_GET_REQUEST: string = 'BREWERIES_GET_REQUEST';
export const BREWERIES_GET_SUCCESS: string = 'BREWERIES_GET_SUCCESS';
export const BREWERIES_GET_FAILURE: string = 'BREWERIES_GET_FAILURE';

export const getBreweries: Function = (dispatch: Dispatch): void => {
  dispatch({ type: BREWERIES_GET_REQUEST });
  fetch('https://api.openbrewerydb.org/breweries')
    .then((response) => response.json())
    .then((res: Array<Brewery>) => (
      dispatch({ type: BREWERIES_GET_SUCCESS, params: { breweries: res }})
    ))
    .catch(() => dispatch({ type: BREWERIES_GET_FAILURE }));
}

export const BREWERIES_SELECT_BREWERY: string = 'BREWERIES_SELECT_BREWERY';
export const selectBrewery: Function = (dispatch: Dispatch, id: number): void => {
  dispatch({ type: BREWERIES_SELECT_BREWERY, params: { id }});
}
