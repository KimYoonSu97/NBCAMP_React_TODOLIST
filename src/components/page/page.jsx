import { useState } from "react";
import { WorkingListDraw } from "../List/area";
import { InputAreaFunction } from "../input/inputAreaFunc";

function Page() {
  const [workingList, setWorkingList] = useState([]);
  let today = new Date();
  today = today.toLocaleDateString();

  return (
    <div className="inner">
      <header>Thomas ToDoList 🔥{today}🔥 </header>

      {/* 입력필드 및 기능 컴포넌트 */}
      <InputAreaFunction
        workingList={workingList}
        setWorkingList={setWorkingList}
      ></InputAreaFunction>

      {/* 하단 리스트 컴포넌트 */}
      <WorkingListDraw
        workingList={workingList}
        setWorkingList={setWorkingList}
      ></WorkingListDraw>
    </div>
  );
}

export { Page };
