import { Children, useState } from "react";
import "./App.css";

function App() {
  let workarr = [
    { id: 1, subject: "제목넣어라", detail: "디테일한 할일을 넣어라" },
    { id: 2, subject: "제목2넣어라", detail: "디테일한 할일2을 넣어라" },
    { id: 3, subject: "제목3넣어라", detail: "디테일한 할일3을 넣어라" },
  ];

  let donearr = [
    { id: 4, subject: "제목넣어라", detail: "디테일한 할일을 넣어라" },
    { id: 5, subject: "제목2넣어라", detail: "디테일한 할일2을 넣어라" },
    { id: 6, subject: "제목3넣어라", detail: "디테일한 할일3을 넣어라" },
  ];

  const [workingList, setWorkingList] = useState(workarr);
  const [doneList, setDoneList] = useState(donearr);

  function addWorkList() {
    return;
  }

  function CardDraw({ list, children }) {
    return list.map((item) => {
      return (
        <div className={children.cardClass} key={item.id}>
          <p className="title">{item.subject}</p>
          <p className="detail">{item.detail}</p>
          <div className="btnArea">
            <button className="delete">Delete</button>
            <button className={children.btnClass}>{children.btnClass}</button>
          </div>
        </div>
      );
    });
  }

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
          {/* 내부에 map으로 돌리기 */}
          <CardDraw list={workingList}>
            {{ cardClass: "workingCard", btnClass: "done" }}
          </CardDraw>
        </div>
      </section>

      <section className="doneList">
        <p className="title">done...🔥</p>
        <div className="content">
          {/* 내부에 map으로 돌리기 */}
          <CardDraw list={doneList}>
            {{ cardClass: "doneCard", btnClass: "cancel" }}
          </CardDraw>
        </div>
      </section>
    </div>
  );
}

export default App;
