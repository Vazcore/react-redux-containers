import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
 
class UserList extends Component {
  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={ () => this.props.selectUser(user) }>{user.name}</li>
      );
    });
  }
  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectUser
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);