import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  getBreweries as getBreweriesAction,
} from '../../actions';
import { Brewery } from '../../screens';
import { AppState } from '../../store';

const mapStateToProps = (state: AppState) => {
  const { breweries } = state;
  return { ...breweries };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getBreweries: () => getBreweriesAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
