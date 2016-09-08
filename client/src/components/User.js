import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user } = this.props;

    return (
      <span>{user.name}</span>
    );
  }
}

export default User;