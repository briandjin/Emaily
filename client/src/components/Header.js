import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a>Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = function(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
