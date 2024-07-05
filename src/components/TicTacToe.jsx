import React, { useState,useRef } from 'react'
import circle_icon from '../assets/tic-tac-toe-o.png'
import cross_icon from '../assets/tic-tac-toe-x.png'

let data = ["","","","","","","","",""];

export default function TicTacToe() {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  let toggle = (e,num) => {
    console.log(e);

    if(lock) return 0;

    if(count == 9) setLock(true);

    else if(count%2 === 0){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    }

    else if(count%2 === 1){
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }

    setTimeout(checkWins,150);
    e.target.classList.add('clicked');
  }

  function checkWins () {
    if(data[0] === data[1] && data[1] === data[2] && data[2] != "" ) won(data[0]);
    
    else if(data[3] === data[4] && data[4] === data[5] && data[5] != "" ) won(data[3]);
    
    else if(data[6] === data[7] && data[7] === data[8] && data[8] != "" ) won(data[6]);
    
    else if(data[0] === data[3] && data[3] === data[6] && data[6] != "" ) won(data[0]);
    
    else if(data[1] === data[4] && data[4] === data[7] && data[7] != "" ) won(data[1]);
    
    else if(data[2] == data[5] && data[5] == data[8] && data[8] != "" ) won(data[2]);
    
    else if(data[0] === data[4] && data[4] === data[8] && data[8] != "" ) won(data[0]);

    else if(data[2] === data[4] && data[4] === data[6] && data[6] != "" ) won(data[2]);

  }

  function won (winner) {
    setLock(true);
    if(winner === 'x') {
      titleRef.current.innerHTML = `Congratulations : <img src='${cross_icon}'> Wins!`;
    }
    else if(winner === 'o'){
      titleRef.current.innerHTML = `Congratulations : <img src='${circle_icon}'> Wins!`;
    }
  }

  function resetGame () {
    setLock(false);
    setCount(0);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = `Tic Tac Toe Game in <span>REACT</span>`

    box_array.map( (box) => {
      box.current.innerHTML = "";
      box.current.classList.remove('clicked');
    })
  }

  return (
    <>
    <div className="container">
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game in<span> REACT</span></h1>
      <div className="board">
        <div className="row1 row">
          <div className="box" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
          <div className="box" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
          <div className="box" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2 row">
          <div className="box" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
          <div className="box" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
          <div className="box" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3 row">
          <div className="box" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
          <div className="box" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
          <div className="box" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset-btn" onClick={resetGame} type='button'>RESET</button>
    </div>
    </>
  )
}
