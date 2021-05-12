import { AnyAction, Reducer } from 'redux';
import {
  BREWERIES_FAVOURITE_BREWERY,
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
  favouriteBreweries: Array<number>;
  selectedBrewery: Brewery | null;
  queryCity: string | null,
}

const initialState: State = {
  breweries: [],
  breweriesGetRequest: false,
  breweriesGetSuccess: false,
  breweriesGetFailure: false,
  favouriteBreweries: [],
  selectedBrewery: null,
  queryCity: null,
}

const getBreweryById: Function = (breweries: Array<Brewery>, id: number) => {
  const foundBrewery: Brewery | undefined = breweries.find((brewery: Brewery) => brewery.id === id);
  return foundBrewery || null;
}

const breweryReducer: Reducer<State, AnyAction> = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case BREWERIES_FAVOURITE_BREWERY:
      return {
        ...state,
        favouriteBreweries: state.favouriteBreweries.includes(action.params.id)
          ? state.favouriteBreweries.filter((id: number) => id !== action.params.id)
          : [...state.favouriteBreweries, action.params.id],
      }
    
    case BREWERIES_GET_REQUEST:
      return {
        ...state,
        breweriesGetRequest: true,
        breweriesGetSuccess: false,
        breweriesGetFailure: false,
        queryCity: action.params.queryCity,
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
      return {
        ...state,
        selectedBrewery: getBreweryById(state.breweries, action.params.id),
      }

    default:
      return state;
  }
}

export default breweryReducer;
