import { SortingBtn, SortingCard } from "./listFunc";
import { useContext } from "react";
import { workingListContext } from "../../context/workingList";

// 내부 카드 true,false 판단하여 그리는 컴포넌트
function DrawListCard({ children }) {
  const { workingList, setWorkingList } = useContext(workingListContext);

  // 카드삭제 함수
  const deleteCard = function (id) {
    let newWorkingList = workingList.filter((item) => {
      return item.id !== id;
    });
    setWorkingList([...newWorkingList]);
  };

  //카드 상태 수정 함수
  const changeIsDoneState = function (id) {
    let newWorkingList = workingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return { ...item };
      }
    });
    setWorkingList([...newWorkingList]);
  };

  let falseList = workingList.filter((item) => {
    return item.isDone === children;
  });

  return (
    <>
      {falseList.map((item) => {
        return (
          <div className={SortingCard(item.isDone)} key={item.id}>
            <p className="title">{item.subject}</p>
            <p className="detail">{item.detail}</p>
            <div className="btnArea">
              <button
                className="delete"
                onClick={() => {
                  deleteCard(item.id);
                }}
              >
                Delete
              </button>
              <button
                className={SortingBtn(item.isDone)}
                onClick={() => {
                  changeIsDoneState(item.id);
                }}
              >
                {SortingBtn(item.isDone)}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export { DrawListCard };
