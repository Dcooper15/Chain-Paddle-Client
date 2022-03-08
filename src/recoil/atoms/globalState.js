const {
  atom,
  //selector,
  //useCallBack
} = require("recoil");

export const dataDisplayState = atom({
  key: "dataDisplayState",
  default: false,
});

// export const toggleDataDisplayState = selector({
//   key: "showGridToggle",
//   set: ({ get, set }) => {
//     const currentValue = get(dataDisplayState);
//     set(dataDisplayState, !currentValue);
//   },
// });
