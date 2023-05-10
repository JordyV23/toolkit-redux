import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { dencrement, increment, incrementDouble } from "./store/slices/counter";

function App() {
  const {counter} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>count is {counter}</p>
      <div className="card">
        <button onClick={()=> {dispatch( increment() )}}>
          Incremente
        </button>
        <button onClick={()=> {dispatch( dencrement() )}}>
          Decrement
        </button>
        <button onClick={()=> {dispatch( incrementDouble(2) )}}>
          IncrementDouble
        </button>
      </div>
    </>
  );
}

export default App;
