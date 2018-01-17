// sample component
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllTheThings as fetchAllTheThingsAction } from './actions';

function mySuperAwesomeComponent({ fetchAllTheThings }) {
	return (
		<div onClick={event => fetchAllTheThings()}>
		  Fetch the Things 
		</div>
	);
}

mySuperAwesomeComponent.propTypes = {
	fetchAllTheThings: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchAllTheThings: fetchAllTheThingsAction,
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(mySuperAwesomeComponent);
