import { observable, action, computed, runInAction } from 'mobx';

class AppleData {
  //当前采摘的苹果列表
  @observable pluckAppleList = []
  // 已经吃掉的苹果列表
  @observable eatedAppleList = []
  // 是否正在摘苹果  默认为 false
  @observable isPicking = false
  // 采摘新苹果 异步延迟后添加新苹果数据
  @action.bound pickApple () {
    this.isPicking = true
    setTimeout(() => {
      // 异步1秒添加新苹果 id 为当前所有苹果数量，重量随机
      // 异步函数中更新数据 需要使用 runInAction 函数
      runInAction(() => {
          this.pluckAppleList.push({
              id: this.getAllAppleNumber + 1,
              weight: Math.floor((Math.random() * 50)) + 200
          })
          this.isPicking = false
      })
    }, 1000);
  }
  // 吃掉苹果
  @action.bound eatApple(index) {
    const editApp = this.pluckAppleList.splice(index,1)
    this.eatedAppleList = [...this.eatedAppleList,...editApp ]
  }
  // 获取所有苹果数量 返回 id
  @computed get getAllAppleNumber() {
    return this.pluckAppleList.length + this.eatedAppleList.length
  }

  // 计算当前的苹果重量
  @computed get getPluckWeight() {
    return this.pluckAppleList.reduce((total,apple) => total += apple.weight , 0)
  }

  // 计算吃了的苹果重量
  @computed get getEatedWeight () {
    return this.eatedAppleList.reduce((total, apple) => total += apple.weight, 0)
  }
}

const data = new AppleData();

export default data;