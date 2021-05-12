import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  addToFavourites as addToFavouritesAction,
} from '../../actions';
import { Brewery } from '../../screens';
import { AppState } from '../../store';

const mapStateToProps = (state: AppState) => {
  const { breweries } = state;
  return { ...breweries };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToFavourites: (id: number) => addToFavouritesAction(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
