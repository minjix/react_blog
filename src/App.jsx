/* eslint-disable*/

import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [postTitle, setPostTitle1] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [logo, setLogo] = useState('ReackBlog');
  let [likeBtn, setLikeBtn] = useState(0);

  return (
    <div className='App'>
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={ () => {
        let copy = [...postTitle];
        copy[0] = '여자 코트 추천';
        setPostTitle1(copy);
      }}>버튼</button>

      <button onClick={() => {
        let copy = [...postTitle];
        copy.sort();
        setPostTitle1(copy);

      }}>가나다순 정렬</button>

      <div className='list'>
        <h4>{postTitle[0]} <span onClick={ () => {setLikeBtn(likeBtn + 1)}}>👍</span> {likeBtn} </h4>
        <p>5월 12일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle[1]}</h4>
        <p>5월 12일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle[2]}</h4>
        <p>5월 12일 발행</p>
      </div>
      <Modal></Modal>
      
    </div>
  )
}


function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App
