const User = function ({ item, delBtnHandler }) {
  return (
    <div key={item.id}>
      {item.age} - {item.name}
      <button onClick={() => delBtnHandler(item.id)}>X</button>
    </div>
  );
};

export default User;
