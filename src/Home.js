import React from "react";

/*
Home関数
*/
export default function HomeApp() {
  const message = "ボタンを押下するとHelloの後ろの時刻を更新します";
  const[now, setNow] = React.useState("");

  // 時刻を更新する
  const resetNow = () => {
    // const setNow((state, props) =>  {
      let newNow = new Date();

      // 最新時刻の時、分、秒を抽出
      let hour = newNow.getHours();
      let minute = newNow.getMinutes();
      let second = newNow.getSeconds();
  
      // コンポーネント日時データ（state)を更新する
      setNow(hour + " 時" + minute + " 分" + second + " 秒");
  };

  // コンポーネントの描画
  return (
    <div>
      <h1>Agile OJT Reactベースコード</h1>
      <p>
        Hello { now }
      </p>
      <button onClick={ resetNow }>Reset</button>
      <p>
        { message }
      </p>
    </div>
  );
}
