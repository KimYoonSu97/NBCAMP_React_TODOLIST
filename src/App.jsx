/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import "./App.css";
import { Page } from "./components/page/page";
import { workingListContext } from "./context/workingList";

function App() {
  const [workingList, setWorkingList] = useState([]);

  // 첫번째 렌더링 시 데이터 가져온 후 실행안함.
  useEffect(() => {
    let listFromDB = JSON.parse(localStorage.getItem("workingList"));
    setWorkingList(listFromDB);
  }, []);

  return (
    <workingListContext.Provider value={{ workingList, setWorkingList }}>
      <Page />
    </workingListContext.Provider>
  );
}

export default App;
