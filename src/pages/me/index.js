import React, { Component } from 'react'

class Me extends Component {
  constructor(props) {
    super(props);
    console.log('me::', props)
    this.state = {  };
  }
  render() {
    return (
      <div className="about">
        <h2>个人中心页</h2>
      </div>
    );
  }
}

export default Me;