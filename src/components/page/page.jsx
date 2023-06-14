import { WorkingListDraw } from "../List/area";
import { InputAreaFunction } from "../input/inputAreaFunc";

function Page() {
  let today = new Date();
  today = today.toLocaleDateString();

  return (
    <div className="inner">
      <header>Thomas ToDoList 🔥{today}🔥 </header>

      {/* 입력필드 및 기능 컴포넌트 */}
      <InputAreaFunction></InputAreaFunction>

      {/* 하단 리스트 컴포넌트 */}
      <WorkingListDraw></WorkingListDraw>
    </div>
  );
}

export { Page };
