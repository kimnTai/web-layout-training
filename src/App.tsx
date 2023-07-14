import { useModel } from "./hook/useModel";
import { useReactive } from "./hook/useReactive";

export default function App() {
  const state = useReactive({ text: "" });

  return (
    <div className="App">
      value : {state.text}
      <br />
      <input type="text" ref={useModel(state)} />
    </div>
  );
}
