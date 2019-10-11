import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withAlert } from "react-alert";

const Alerts = ({ alert, error }) => {
  useEffect(() => {
    alert.show("Oh look, an alert!");
  }, [error]);
  return <Fragment></Fragment>;
};

const mapStateToProps = state => ({
  error: state.errors
});

// Alerts.propTypes = {
//   error: PropTypes.object.isRequired
// };

export default connect(mapStateToProps)(withAlert()(Alerts));
