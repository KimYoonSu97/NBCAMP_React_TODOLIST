import { Children, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="inner">
      <header>Thomas ToDoList</header>

      <section className="inputArea">
        <span>Subject</span>
        <input type="text" className="subject" />
        <span>detail</span>
        <input type="text" className="detail" />
        <button className="post">가보자고...🔥</button>
      </section>

      <section className="filterBtn">
        <button className="working">Working...🔥</button>
        <button className="done">done...🔥</button>
      </section>

      <section className="workingList">
        <p className="title">Working...🔥</p>
        <div className="content">
          <div className="workingCard">
            <p className="title">제목</p>
            <p className="detail">내용넣기</p>
            <div className="btnArea">
              <button className="delete">Delete</button>
              <button className="done">Done</button>
            </div>
          </div>
          <div className="workingCard">
            <p className="title">제목</p>
            <p className="detail">내용넣기</p>
            <div className="btnArea">
              <button className="delete">Delete</button>
              <button className="done">Done</button>
            </div>
          </div>
        </div>
      </section>

      <section className="doneList">
        <p className="title">done...🔥</p>
        <div className="content">
          <div className="doneCard">
            <p className="title">제목</p>
            <p className="detail">내용넣기</p>
            <div className="btnArea">
              <button className="delete">Delete</button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
