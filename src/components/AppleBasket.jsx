import React, { Component } from 'react';
import '../styles/appleBasket.scss';
import AppleItem from './AppleItem';
import { inject, observer } from "mobx-react";

@inject('data')
@observer
class AppleBasket extends Component {
  render() {
    /**
     * isPicking 采摘状态
     * pickApple 采摘苹果事件
     * getPluckWeight 当前苹果重量
     * getEatedWeight 当前已吃苹果重量
     * pluckAppleList 当前苹果所有信息
     * eatedAppleList 已吃苹果所有信息
     */
    const { isPicking, pickApple, getPluckWeight, getEatedWeight, pluckAppleList, eatedAppleList } = this.props.data
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">{pluckAppleList.length}个苹果，{getPluckWeight}克</div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">{eatedAppleList.length}个苹果，{getEatedWeight}克</div>
          </div>
        </div>

        <div className="appleList">
          <AppleItem />
        </div>

        <div className="btn-div">
          <button className={ isPicking ? 'disabled' : ''  }  onClick={ pickApple }>{ isPicking ? '正在采摘...' : '摘苹果'}</button>
        </div>
      </div>
    )
  }
}
export default AppleBasket;