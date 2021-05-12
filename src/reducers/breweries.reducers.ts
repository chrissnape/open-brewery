import { AnyAction, Reducer } from 'redux';
import {
  BREWERIES_GET_REQUEST,
  BREWERIES_GET_SUCCESS,
  BREWERIES_GET_FAILURE,
  BREWERIES_SELECT_BREWERY,
} from '../actions';
import { Brewery } from '../utils/types';

type State = {
  breweries: Array<Brewery>;
  breweriesGetRequest: boolean;
  breweriesGetSuccess: boolean;
  breweriesGetFailure: boolean;
  selectedBrewery: Brewery | null;
}

const initialState: State = {
  breweries: [],
  breweriesGetRequest: false,
  breweriesGetSuccess: false,
  breweriesGetFailure: false,
  selectedBrewery: null,
}

const breweryReducer: Reducer<State, AnyAction> = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case BREWERIES_GET_REQUEST:
      return {
        ...state,
        breweriesGetRequest: true,
        breweriesGetSuccess: false,
        breweriesGetFailure: false,
      }

    case BREWERIES_GET_SUCCESS:
      return {
        ...state,
        breweries: action.params.breweries,
        breweriesGetRequest: false,
        breweriesGetSuccess: true,
      }

    case BREWERIES_GET_FAILURE:
      return {
        ...state,
        breweriesGetRequest: false,
        breweriesGetFailure: true,
      }

    case BREWERIES_SELECT_BREWERY:
      const foundBrewery: Brewery | undefined = state.breweries.find((brewery: Brewery) => brewery.id === action.params.id);
      return {
        ...state,
        selectedBrewery: foundBrewery || null,
      }

    default:
      return state;
  }
}

export default breweryReducer;
