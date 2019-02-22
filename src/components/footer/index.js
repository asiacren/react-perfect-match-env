import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './index.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tabBarParmas: props.tabBarParmas,
      activeIndex: 0
    };
  }
  onTabBarClick (i, e) {
    e.stopPropagation();

    this.setState({
      activeIndex: i
    })
  }
  render() {
    return (
      <div className="footer">
        <div className="tabBar_box">
          {
            this.state.tabBarParmas.map((item, index) => 
              <Link className="tabBar_item" to={item.route} key={item.type} onClick={this.onTabBarClick.bind(this, index)}>
                <div className="icon">
                  <img src={this.state.activeIndex === index ? item.activeImg : item.img} alt="" />
                </div>
                <div className="title">{item.title}</div>
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  tabBarParmas: PropTypes.array
}

Footer.defaultProps = {
  tabBarParmas: [
    {
      type: 'hot',
      img: require('../../assets/img/tabBar_a.png'),
      activeImg: require('../../assets/img/tabBar_a_s.png'),
      title: '热门',
      route: '/'
    },
    {
      type: 'list',
      img: require('../../assets/img/tabBar_b.png'),
      activeImg: require('../../assets/img/tabBar_b_s.png'),
      title: '榜单',
      route: '/list'
    },
    {
      type: 'me',
      img: require('../../assets/img/tabBar_c.png'),
      activeImg: require('../../assets/img/tabBar_c_s.png'),
      title: '我的',
      route: '/me'
    }
  ]
}

export default Footer;