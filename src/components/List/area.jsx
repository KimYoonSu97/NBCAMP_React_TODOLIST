import { DrawListCard } from "./List";

// 하단 작업 리스트 틀 그리기는 컴포넌트
function WorkingListDraw({ workingList, setWorkingList }) {
  return (
    <div>
      <section className="workingList">
        <p className="title">Working...🔥</p>
        <div className="content">
          <DrawListCard
            workingList={workingList}
            setWorkingList={setWorkingList}
          >
            {false}
          </DrawListCard>
        </div>
      </section>

      <section className="doneList">
        <p className="title">done...🔥</p>
        <div className="content">
          <DrawListCard
            workingList={workingList}
            setWorkingList={setWorkingList}
          >
            {true}
          </DrawListCard>
        </div>
      </section>
    </div>
  );
}

export { WorkingListDraw };
