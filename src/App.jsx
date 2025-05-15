/* eslint-disable*/

import { useState } from 'react';
import React from 'react'
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [postTitle, setPostTitle1] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [likeBtn, setLikeBtn] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [tIndex, setTIndex] = useState(0);
  let [input, setInput] = useState('');

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

      {/* <div className='list'>
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
      </div> */}

      {
        postTitle.map(function(a, i){
          return (
            <div className='list'>
              <h4 onClick={() => {modal == true ? setModal(false) : setModal(true); setTIndex(i)}}>{postTitle[i]} 
                  <span onClick={ (e) => {
                    e.stopPropagation();
                  let copy = [...likeBtn];
                  copy[i] +=  1
                  setLikeBtn(copy)
                  }}>👍</span> {likeBtn[i]}
                </h4>
              {/* <h4>{a}</h4> */}
              <p>5월 12일 발행</p>
              <button onClick={() => {
                let copyTitle = [...postTitle];
                copyTitle.splice(i, 1);
                setPostTitle1(copyTitle);

                let copyLike = [...likeBtn];
                copyLike.splice(i, 1);
                setLikeBtn(copyLike);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {setInput(e.target.value); console.log(input);}}/>
      <button onClick={() => {

        if(input != null && input != ''){
          let copyTitle = [...postTitle];
          copyTitle.unshift(input);
          setPostTitle1(copyTitle);
  
          let copyLike = [...likeBtn];
          copyLike.unshift(0);
          setLikeBtn(copyLike);
        }
      }}>추가</button>

      {
        modal == true ? <Modal chgTitle={setPostTitle1} postTitle={postTitle} tIndex={tIndex}/> : null
      }
      
      <Modal2 />
      
    </div>
  )
}


function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.postTitle[props.tIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
      {/* onClick={() => {
        let copy = [...props.postTitle];
        copy[0] = '여자 코트 추천';
        props.chgTitle(copy);
      }} */}
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render() {
    return(
      <div>Hi~! {this.state.age} 
        <button onClick={() => {
          this.setState({age: 21})
        }}>버튼</button>
      </div>
      
    )
  }
}


export default App
