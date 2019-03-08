import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.changIndexData()
  }
  
  render() {
    return (
      <div className="about">
        <h2>热门页</h2>
        <div>{this.props.title}</div>
      </div>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(['index', 'title'])
})

const mapDispatch = (dispatch) => ({
	changIndexData() {
		dispatch(actionCreators.getIndexInfo());
	}
});

export default connect(mapState, mapDispatch)(Index);