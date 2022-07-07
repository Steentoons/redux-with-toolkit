import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Counter;
