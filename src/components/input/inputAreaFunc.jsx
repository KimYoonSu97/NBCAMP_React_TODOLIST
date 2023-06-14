import { useContext, useState } from "react";
import { workingListContext } from "../../context/workingList";

const InputAreaFunction = function () {
  const { workingList, setWorkingList } = useContext(workingListContext);
  // 추가 (subject,detail) State

  const [subject, setSubject] = useState("");
  const [detail, setDetail] = useState("");

  // 추가 버튼 클릭 함수
  const addBtnHandler = function () {
    let id =
      workingList.length === 0 ? 1 : workingList[workingList.length - 1].id + 1;
    if (subject !== "" && detail !== "") {
      const newWorking = {
        id,
        subject,
        detail,
        isDone: false,
      };
      setWorkingList([...workingList, newWorking]);
      setDetail("");
      setSubject("");
    } else {
      alert("Please.. write your...TODOList....");
      setDetail("");
      setSubject("");
    }
  };

  return (
    <section className="inputArea">
      <span>Subject</span>
      <input
        type="text"
        className="subject"
        placeholder="input Subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      <span>detail</span>
      <input
        type="text"
        className="detail"
        placeholder="input Detail"
        value={detail}
        onChange={(e) => {
          setDetail(e.target.value);
        }}
      />
      <button className="post" onClick={addBtnHandler}>
        Post...🔥
      </button>
    </section>
  );
};

export { InputAreaFunction };
