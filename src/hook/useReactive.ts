import { effect } from "@/packages/reactive/effect";
import { reactive } from "@/packages/reactive/reactive";
import { useCallback, useState } from "react";

export const useReactive = (obj: any) => {
  const [pre, preState] = useState({} as any);
  const [state, setState] = useState(reactive(obj));

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  effect(() => {
    if (pre?.text !== state.text) {
      preState((a) => {
        a.text = state.text;
        return a;
      });
      forceUpdate();
    }
  });

  return state;
};
