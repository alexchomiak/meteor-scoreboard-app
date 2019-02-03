import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
            <h1 className="title"> {this.props.title} </h1>
            <h4 className="subtitle"> {this.props.subtitle} </h4>
        </div>
      </div>
    )
  }
}


TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

TitleBar.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle'
}