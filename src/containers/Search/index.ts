import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  getBreweries as getBreweriesAction,
  selectBrewery as selectBreweryAction,
} from '../../actions';
import { Search } from '../../screens';
import { AppState } from '../../store';

const mapStateToProps = (state: AppState) => {
  const { breweries } = state;
  return { ...breweries };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getBreweries: () => getBreweriesAction(dispatch),
  selectBrewery: (id: number) => selectBreweryAction(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
