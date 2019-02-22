import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about">
        <h2>详情页</h2>
        <p>{this.props.match.url}</p>
        <p>{this.props.match.params.id}</p>
        <Link to={{pathname:'/about', query:{id:'31231', title:'asda'}, state: {state:'424', type:'asdas'}}} >
          <h2>跳到about</h2>
        </Link>
      </div>
    );
  }
}

export default Details;