import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss'



class Header extends Component {

  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool
  }

  static defaultProps = {
    title: '首页',
    visible: false
  }


  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }
  render() {
    const CTrianggle = (props) => {

      let isShow = props.match !== undefined ? !/index/.test(props.match.path)? true : false: props.visible
      if (isShow) {
        return (
          <div className="triangle_box">
            <div className="triangle"></div>
          </div>
        )
      } else {
        return null
      }
    } 

    return (
      <div className="header">
        <div className="title">
          <CTrianggle visible={this.props.visible}/>
          
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Header;