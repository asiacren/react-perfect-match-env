import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tabBarParmas: props.tabBarParmas,
      handlerCback: props.handlerCback,
      activeIndex: 0
    };
  }
  onTabBarClick (i, e) {
    e.stopPropagation();
    e.preventDefault();

    this.setState({
      activeIndex: i
    })
    this.state.handlerCback(i)
  }
  render() {
    return (
      <div className={styles.style}>
        <div className="tabBar_box">
          {
            this.state.tabBarParmas.map((item, index) => 
              <div className="tabBar_item" key={item.type} onClick={this.onTabBarClick.bind(this, index)}>
                <div className="icon">
                  <img src={this.state.activeIndex === index ? item.activeImg : item.img} alt="" />
                </div>
                <div className="title">{item.title}</div>
              </div>
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
      title: '热门'
    },
    {
      type: 'list',
      img: require('../../assets/img/tabBar_b.png'),
      activeImg: require('../../assets/img/tabBar_b_s.png'),
      title: '榜单'
    },
    {
      type: 'me',
      img: require('../../assets/img/tabBar_c.png'),
      activeImg: require('../../assets/img/tabBar_c_s.png'),
      title: '我的'
    }
  ]
}

export default Footer;