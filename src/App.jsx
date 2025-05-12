import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [postTitle1, setPostTitle1] = useState('남자 코트 추천');
  let [postTitle2, setPostTitle2] = useState('강남 우동 맛집');
  let [postTitle3, setPostTitle3] = useState('파이썬 독학');
  let [logo, setLogo] = useState('ReackBlog');

  return (
    <div className='App'>
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className='list'>
        <h4>{postTitle1}</h4>
        <p>5월 12일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle2}</h4>
        <p>5월 12일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle3}</h4>
        <p>5월 12일 발행</p>
      </div>
      <h4 id={post} style={{color : 'red', fontSize : '16px'}}>{post}</h4>
    </div>
  )
}

export default App
