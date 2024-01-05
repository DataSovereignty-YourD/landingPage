import { atom, selector } from "recoil";

export const MainIsVisibleState = atom({
    key:'mainIsVisibleState',
    default: false
})

export const MainIsVisibleValue = selector({
    key:'mainIsVisibleValue',
    get:({get}) => {
        const visivle = get(MainIsVisibleState);
        return visivle;
    }
})