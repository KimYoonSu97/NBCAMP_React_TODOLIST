/* eslint-disable array-callback-return */
import { useState } from "react";
import "./App.css";
import { Page } from "./components/page/page";
import { workingListContext } from "./context/workingList";

function App() {
  const [workingList, setWorkingList] = useState([]);

  return (
    <workingListContext.Provider value={{ workingList, setWorkingList }}>
      <Page />
    </workingListContext.Provider>
  );
}

export default App;
