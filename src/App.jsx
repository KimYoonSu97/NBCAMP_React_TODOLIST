import { Children, useState } from "react";
import "./App.css";
import Btn from "./components/Button";
import User from "./components/Users";

function App() {
  let usersOrigin = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];

  const [users, setUsers] = useState(usersOrigin);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameAddHandler = (e) => {
    setName(e.target.value);
  };

  const ageAddHandler = (e) => {
    setAge(e.target.value);
  };

  const AddBtnHandler = (e) => {
    const newUserTemp = {
      id: users[users.length - 1].id + 1,
      age,
      name,
    };

    setUsers([...users, newUserTemp]);
  };

  const delBtnHandler = (e) => {
    let result = window.confirm("진짜 삭제할꺼야?");
    if (result === true) {
      setUsers(
        users.filter((user) => {
          return user.id !== e;
        })
      );
    }
  };

  return (
    <div>
      <div>
        이름 :&nbsp;
        <input value={name} onChange={nameAddHandler}></input>
        <br />
        나이 :&nbsp;
        <input value={age} onChange={ageAddHandler}></input>
      </div>
      <Btn AddBtnHandler={AddBtnHandler}>추가</Btn>

      <div className="wrap">
        {users.map((item) => {
          return (
            <User key={item.id} item={item} delBtnHandler={delBtnHandler} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
