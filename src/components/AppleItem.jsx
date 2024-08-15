import React, { Component } from 'react';
import '../styles/appleItem.scss';
import { inject, observer } from "mobx-react";
import image from '../images/apple.png';

@inject('data')
@observer
class AppleItem extends Component {
  render() {
    /**
     * eatApple 吃掉苹果状态
     * pluckAppleList 当前苹果所有信息
     */
    const { pluckAppleList, eatApple } = this.props.data
    const styles = {
      display: pluckAppleList.length === 0 ? 'block' : 'none'
    }
    return (
      <div>
        {
          pluckAppleList.map((apple,index) => (
            <div className="appleItem" key={apple.id} >
              <div className="apple"><img src={image} alt="" /></div>
              <div className="info">
                <div className="name">红苹果 - { apple.id }号</div>
                <div className="weight">{ apple.weight }克</div>
              </div>
              <div className="btn-div">
                <button onClick = {()=> eatApple(index)}> 吃掉 </button>
              </div>
            </div>
          ))
        }
        <div className="empty-tip" style={styles}>
          苹果篮子空空如也
        </div>
      </div>
    )
  }
}

export default AppleItem;