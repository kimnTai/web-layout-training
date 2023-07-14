import { useModel } from "./hook/useModel";
import { useRef } from "./hook/useRef";

export default function App() {
  const state = useRef("");

  return (
    <div className="App">
      value : {state.value}
      <br />
      <input type="text" ref={useModel(state)} />
    </div>
  );
}
