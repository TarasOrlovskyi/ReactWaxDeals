import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  render() {
    return (
        <Profile email={this.props.email}
                 discogsUserName={this.props.discogsUserName}
        />
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  discogsUserName: state.auth.discogsUserName
});

export default compose(withAuthRedirect, connect(mapStateToProps, {}))(ProfileContainer);