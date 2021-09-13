import React from "react";

class HomeApp extends React.Component {
  message = "ボタンを押下するとHelloの後ろの時刻を更新します";

  constructor(props) {
    super(props);
    this.state = {wow: "hoge"};
    this.resetNow = this.resetNow.bind(this)
  }

  render() {
    return (
      <div>
        <h1>React OJT Angularベースコード</h1>
        <p>
          Hello { this.state.wow }
        </p>
        <button onClick={this.resetNow}>Reset</button>
        <p>
          { this.message }
        </p>
      </div>
    );
  }

  resetNow() {
    this.setState((state, props) =>  {
      let newNow = new Date();

      // 最新時刻の時、分、秒を抽出
      let hour = newNow.getHours();
      let minute = newNow.getMinutes();
      let second = newNow.getSeconds();
  
      // コンポーネント日時属性を更新する
      return {wow: hour + " 時" + minute + " 分" + second + " 秒"};
    });
  }
}

export default HomeApp;
