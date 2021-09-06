import produce from "immer";
import { atom, useRecoilState } from "recoil";

const recoilTemplateAtom = atom({
  key: "recoilTemplate",
  default: {
    value: false,
  },
});

export const useRecoilTemplate = () => {
  const [recoilTemplate, setRecoilTemplate] =
    useRecoilState(recoilTemplateAtom);

  const setValue = (payload: boolean) => {
    setRecoilTemplate(
      produce((draft) => {
        draft.value = payload;
      })
    );
  };

  return { recoilTemplate, setRecoilTemplate, setValue };
};
