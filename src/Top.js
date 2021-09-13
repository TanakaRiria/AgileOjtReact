import React, {useState, useEffect} from 'react'

/*
Topコンポーネント
*/
export default function TopApp(props) {
  // hook
  useEffect(() => {
    // homeに遷移
    props.history.push("/home");
  },[]); 

  // コンポーネントを描画
  return (
    // <div onLoad={ toHome }>
    <div>
       <h1>Top</h1>
    </div>
  );
}