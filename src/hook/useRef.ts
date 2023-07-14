import { effect } from "@/packages/reactive/effect";
import ref from "@/packages/reactive/ref";
import { useCallback, useState } from "react";

export const useRef = (value: any) => {
  const [pre, preState] = useState({} as any);
  const [state] = useState(ref(value));

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  effect(() => {
    if (pre?.text !== state.value) {
      preState((a) => {
        a.text = state.value;
        return a;
      });
      forceUpdate();
    }
  });

  return state;
};
