import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import * as actions from '../../../store/actions/index';

interface OwnProps {}

type Props = OwnProps & DispatchProps;

function Logout({ onLogout }: Props) {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/login" />;
}

interface DispatchProps {
  onLogout: typeof actions.logout;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
