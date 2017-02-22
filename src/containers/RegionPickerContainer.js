import { connect } from 'react-redux';
import { changeRegion } from '../actions';
import RegionPicker from '../components/RegionPicker';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (region) => {
      dispatch(changeRegion(region));
    }
  };
};

const RegionPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionPicker);

export default RegionPickerContainer;
