import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return (<h4>Select a User ...</h4>);
    }
    return (
      <div>
        <p><i>{this.props.user.id}</i></p>
        <p>{this.props.user.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);