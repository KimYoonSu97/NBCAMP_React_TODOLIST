const Btn = ({ AddBtnHandler, children }) => {
  return <button onClick={AddBtnHandler}>{children}</button>;
};

export default Btn;
